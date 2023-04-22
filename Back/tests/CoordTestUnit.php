<?php

use PHPUnit\Framework\TestCase;

class CoodinatesTest extends TestCase
{

    //comprobar que se puede agregar una coordenada correctamente
public function testAgregarCoordenada(): void
{
    $client = static::createClient();

    $client->request(
        'POST',
        '/coordenadas/',
        [],
        [],
        ['CONTENT_TYPE' => 'application/json'],
        '{"latitud": 10.123456, "longitud": -84.123456}'
    );

    $this->assertResponseIsSuccessful();
    $this->assertJsonStringEqualsJsonString('{"latitud": 10.123456, "longitud": -84.123456}', $client->getResponse()->getContent());
}

//comprobar que se devuelve un error cuando no se envían datos

public function testAgregarCoordenadaSinDatos(): void
{
    $client = static::createClient();

    $client->request(
        'POST',
        '/coordenadas/',
        [],
        [],
        ['CONTENT_TYPE' => 'application/json'],
        '{}'
    );

    $this->assertResponseStatusCodeSame(400);
    $this->assertJsonStringEqualsJsonString('{"error": "Datos inválidos"}', $client->getResponse()->getContent());
}

//comprobar que se pueden obtener todas las coordenadas correctamente

public function testObtenerTodasLasCoordenadas(): void
{
    $client = static::createClient();

    $client->request('GET', '/coordenadas/all');

    $this->assertResponseIsSuccessful();
    $this->assertCount(0, json_decode($client->getResponse()->getContent()));
}
}