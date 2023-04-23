<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiInsectControllerTest extends WebTestCase
{
    public function testBugsList()
    {
        $client = static::createClient();
        $client->request('GET', '/insect/list');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertJson($client->getResponse()->getContent());
        
        $insects = json_decode($client->getResponse()->getContent(), true);
        $this->assertIsArray($insects);

        // Comprobar que se ha devuelto al menos un insecto
        $this->assertNotEmpty($insects);

        // Comprobar que cada insecto tiene las propiedades esperadas
        foreach ($insects as $insect) {
            $this->assertArrayHasKey('id', $insect);
            $this->assertArrayHasKey('name', $insect);
            $this->assertArrayHasKey('description', $insect);
            $this->assertArrayHasKey('image', $insect);
        }
    }
}
