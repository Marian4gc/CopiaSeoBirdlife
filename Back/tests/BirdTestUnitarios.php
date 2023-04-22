<?php

namespace App\Tests\Entity;

use App\Entity\Birds;
use PHPUnit\Framework\TestCase;

class BirdsTest extends TestCase
{
    public function testBirdsProperties()
    {
        $bird = new Birds();

        $bird->setId(1);
        $this->assertEquals(1, $bird->getId());

        $bird->setName('Great Tit');
        $this->assertEquals('Great Tit', $bird->getName());

        $bird->setDescription('The great tit is a passerine bird in the tit family Paridae.');
        $this->assertEquals('The great tit is a passerine bird in the tit family Paridae.', $bird->getDescription());

        $bird->setImage('great-tit.jpg');
        $this->assertEquals('great-tit.jpg', $bird->getImage());

        $bird->setLink('https://en.wikipedia.org/wiki/Great_tit');
        $this->assertEquals('https://en.wikipedia.org/wiki/Great_tit', $bird->getLink());

        $bird->setSong('great-tit.mp3');
        $this->assertEquals('great-tit.mp3', $bird->getSong());
    }

    public function testAddRemoveTotaldata()
    {
        $bird = new Birds();

        $totaldata = $this->createMock('App\Entity\Totaldata');
        $bird->addTotaldata($totaldata);
        $this->assertEquals($bird, $totaldata->getBirds());

        $bird->removeTotaldata($totaldata);
        $this->assertNull($totaldata->getBirds());
    }

    public function testAddRemoveUser()
    {
        $bird = new Birds();

        $user = $this->createMock('App\Entity\User');
        $bird->addUser($user);
        $this->assertTrue($user->getBirds()->contains($bird));

        $bird->removeUser($user);
        $this->assertFalse($user->getBirds()->contains($bird));
    }
}
