<?php

namespace App\Controller;

use App\Entity\Insect;
use App\Form\InsectType;
use App\Repository\InsectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/insect')]
class InsectController extends AbstractController
{
    #[Route('/list', name: 'app_apibugs_index', methods: ['GET'])]
    public function bugs(InsectRepository $insectRepository): Response
    {
        $insect = $insectRepository->findAll();
        $data = [];

        foreach ($insect as $p) {
            $data[] = [
                'id' => $p->getId(),
                'name' => $p->getName(),
                'description' => $p->getDescription(),
                'image' => $p->getImage(),
            ];
        }
        
        // return $this->json($data);
        return $this->json($data, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
    }

}


