<?php

namespace App\Tests;

use Symfony\Component\Panther\PantherTestCase;

use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\ResponseInterface;
use Symfony\Component\HttpFoundation\Response;


class SeoBackTest extends PantherTestCase
{
    public function testSomething(): void
    {
        $client = static::createPantherClient();
        $crawler = $client->request('GET', '/birds');

        $this->assertSelectorTextContains('h1', 'Birds index');
    }

    public function testButtonClick()
    {
        $client = static::createPantherClient();
        $client->request('GET', '/plant');
        $button = $client->getCrawler()->filter('.btn-success')->first();
        $button->click();
        $newUrl = $client->getCurrentURL();
        $this->assertNotEquals('/plant/new', $newUrl);
    }

    //comprobar que el login se hace correctamente

    // public function testLogin()
    // {
    // $client = static::createPantherClient();
    // $crawler = $client->request('GET', '/login');

    // $form = $crawler->filter('form[name="login"]')->form([
    //     'username' => 'marian',
    //     'password' => '12345678',
    // ]);
    // $client->submit($form);

    // $this->assertSame('/home', $client->getCurrentURL());
    // }
}

//comprobar que la Api User funciona correctamente
class ApiTest extends PantherTestCase
{
    private $client;

    protected function setUp(): void
    {
        $this->client = static::createPantherClient();
    }

    public function testCreateUser(): void
    {
        $this->client->request('POST', '/user', [], [], ['CONTENT_TYPE' => 'application/json'], json_encode([
            'username' => 'testuser',
            'password' => 'testpassword'
        ]));

        $response = $this->client->getResponse();

        $this->assertSame(ResponseInterface::HTTP_CREATED, $response->getStatusCode());
        $this->assertJsonStringEqualsJsonString('{"id":1,"username":"testuser","password":"testpassword"}', $response->getContent());
    }

    public function testGetUserList(): void
    {
        $this->client->request('GET', '/user');

        $response = $this->client->getResponse();

        $this->assertSame(ResponseInterface::HTTP_OK, $response->getStatusCode());
        $this->assertJsonStringEqualsJsonString('[{"id":1,"username":"testuser","password":"testpassword"}]', $response->getContent());
    }

    public function testUpdateUser(): void
    {
        $this->client->request('PUT', '/user/1', [], [], ['CONTENT_TYPE' => 'application/json'], json_encode([
            'username' => 'newtestuser',
            'password' => 'newtestpassword'
        ]));

        $response = $this->client->getResponse();

        $this->assertSame(ResponseInterface::HTTP_OK, $response->getStatusCode());
        $this->assertJsonStringEqualsJsonString('{"id":1,"username":"newtestuser","password":"newtestpassword"}', $response->getContent());
    }

    public function testDeleteUser(): void
    {
        $this->client->request('DELETE', '/user/1');

        $response = $this->client->getResponse();

        $this->assertSame(ResponseInterface::HTTP_NO_CONTENT, $response->getStatusCode());

        $this->client->request('GET', '/user');
        $response = $this->client->getResponse();
        $this->assertJsonStringEqualsJsonString('[]', $response->getContent());
    }
}


//comprobar que los datos de la aves se recibe y se guardan correctamente en la base de datos
class BirdControllerTest extends PantherTestCase
{
    public function testSubmitSelectedBirds()
    {
        $client = static::createPantherClient();

        $selectedBirds = ['Abejaruco europeo', 'Abubilla común', 'Ruiseñor común'];

        $response = $client->request('POST', '/totaldata/list', [
            'json' => ['selectedBirds' => $selectedBirds]
        ]);

        $this->assertSame(Response::HTTP_OK, $response->getStatusCode());

        $responseData = json_decode($response->getContent(), true);
        $this->assertArrayHasKey('selectedBirds', $responseData);
        $this->assertSame($selectedBirds, $responseData['selectedBirds']);
    }
}

//comprobar que se recibe un token
class TokenTests extends PantherTestCase 
{
public function testJwtAuthentication(): void
{
    $client = static::createClient();

    $response = $client->request('POST', 'api/login_check', [
        'headers' => ['Content-Type' => 'application/json'],
        'json' => [
            'username' => 'test_user',
            'password' => 'test_password'
        ]
    ]);


    $this->assertSame(200, $response->getStatusCode());


    $content = json_decode($response->getContent(), true);
    $this->assertArrayHasKey('token', $content);
    $token = $content['token'];
    $this->assertTrue($this->validateJwtToken($token));
}

private function validateJwtToken(string $token): bool
{
    return is_string($token);
}
}

//tiempo de carga de la página

class TimeTests extends PantherTestCase
{
public function testPageLoadTime(): void
{
    $client = static::createPantherClient();

    $time = $client->measure(function () use ($client) {
        $crawler = $client->request('GET', '/insect');
        $this->assertSame(200, $client->getResponse()->getStatusCode());
    });

    $expectedTime = 3;
    $this->assertLessThanOrEqual($expectedTime, $time);
}
}