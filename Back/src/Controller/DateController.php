<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

class DateController extends AbstractController
{
    #[Route('/api/fecha', name: 'app_date')]
    public function index(): JsonResponse
    {
        $fecha = new \DateTime();
        return new JsonResponse([
            'fecha' => $fecha -> format('d-m-Y H:i')
        ]);

        // $fecha = new fecha();
        // $fecha->setCreatedAt(new \DateTime());
        // $entityManager->persist($fecha);
        // $entityManager->flush();
        
        // return new JsonResponse(['fecha' => $fecha->getCreatedAt()]);
        // return $this->json($fecha, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
    }
}