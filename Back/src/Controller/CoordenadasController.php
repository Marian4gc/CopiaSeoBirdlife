<?php

namespace App\Controller;

use App\Entity\Coordenadas;
use App\Form\CoordenadasType;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\CoordenadasRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/coordenadas')]
class CoordenadasController extends AbstractController
{
    #[Route('/', name: 'app_coordenadas_index', methods: ['GET', 'POST'])]
    public function index(Request $request, EntityManagerInterface $entityManager, CoordenadasRepository $coordenadasRepository): Response
{

    $data = json_decode($request->getContent(), true);

    if (!isset($data) || !is_array($data) || count($data) === 0) {
        return $this->json(['error' => 'Datos inválidos'], $status = 400, $headers = ['Access-Control-Allow-Origin'=>'*']);
    }

        $coordenada = new Coordenadas();

        // Asignar los valores de latitud y longitud a la instancia de Coordenadas
        $coordenada->setLatitud($data['latitud']);
        $coordenada->setLongitud($data['longitud']);

        $latitud = $data['latitud'];
        $longitud = $data['longitud'];

        $coordenada->setLatitud('');
        $coordenada->setLongitud('');

        // Guardar la instancia de Coordenadas en la base de datos

        $entityManager->persist($coordenada);
        $entityManager->flush();



        return $this->json($coordenada, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
}

#[Route('/all', name: 'app_coordenadas_all', methods: ['GET'])]
public function getAllCoordenadas(CoordenadasRepository $coordenadasRepository): Response
{
    $coordenadas = $coordenadasRepository->findAll();

    return $this->json($coordenadas, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
}
}

