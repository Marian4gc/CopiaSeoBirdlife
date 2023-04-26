<?php

namespace App\Controller;



use App\Entity\Totaldata;
use App\Form\TotaldataType;
use App\Repository\TotaldataRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/totaldata')]
class TotaldataController extends AbstractController
{
    #[Route('/list', name: 'app_totaldata_index', methods: ['POST', 'GET'])]
    public function bird(Request $request, EntityManagerInterface $entityManager, TotaldataRepository $totaldataRepository): Response
    {
        $data = json_decode($request->getContent(), true);


        if (!isset($data) || !is_array($data) || count($data) === 0) {
            return $this->json(['error' => 'Datos inválidos'], $status = 400, $headers = ['Access-Control-Allow-Origin'=>'*']);
        }
        

            $user = $this->getUser();


        
    foreach ($data['birds'] as $birdData) {
        $name = $birdData['name'];
        $bird = new Totaldata();
        $bird->setName($name);
        $user = $this->getUser();
        $bird->setUser($user);
        $entityManager->persist($bird);
    }
    $bird = new Totaldata();
    $bird->setName('');
    $user = $this->getUser();    
    $bird->setUser($user);
    $entityManager->persist($bird);
    $entityManager->flush();



        $post = [];

        $result = $totaldataRepository->findAll();
        foreach ($result as $r) {
            $post[] = [
                'name' => $r->getName(),
            ];
        }

        return $this->json($post, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
    }

    #[Route('/plant', name: 'app_totalplantdata_index', methods: ['POST', 'GET'])]
    public function plant(Request $request, EntityManagerInterface $entityManager, TotaldataRepository $totaldataRepository): Response
    {
        $data = json_decode($request->getContent(), true);


        if (!isset($data) || !is_array($data) || count($data) === 0) {
            return $this->json(['error' => 'Datos inválidos'], $status = 400, $headers = ['Access-Control-Allow-Origin'=>'*']);
        }




    foreach ($data['plants'] as $plantData) {
        $name = $plantData['name'];
        $bird = new Totaldata();
        $bird->setName($name);
        $entityManager->persist($bird);
    }
    $bird = new Totaldata();
    $bird->setName('');
    $entityManager->persist($bird);
    $entityManager->flush();



        $post = [];

        $result = $totaldataRepository->findAll();
        foreach ($result as $r) {
            $post[] = [
                // 'id' => $r->getId(),
                'name' => $r->getName(),
            ];
        }

        return $this->json($post, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
    }
    #[Route('/insect', name: 'app_totalinsectdata_index', methods: ['POST', 'GET'])]
    public function insect(Request $request, EntityManagerInterface $entityManager, TotaldataRepository $totaldataRepository): Response
    {
        $data = json_decode($request->getContent(), true);


        if (!isset($data) || !is_array($data) || count($data) === 0) {
            return $this->json(['error' => 'Datos inválidos'], $status = 400, $headers = ['Access-Control-Allow-Origin'=>'*']);
        }




    foreach ($data['insects'] as $insectData) {
        $name = $insectData['name'];
        $insect = new Totaldata();
        $insect->setName($name);
        $entityManager->persist($insect);
    }
    $insect = new Totaldata();
    $insect->setName('');
    $entityManager->persist($insect);
    $entityManager->flush();



        $post = [];

        $result = $totaldataRepository->findAll();
        foreach ($result as $r) {
            $post[] = [
                'name' => $r->getName(),
            ];
        }

        return $this->json($post, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
    }

    #[Route('/allbirds', name: 'app_allbird', methods: ['POST', 'GET'])]
    public function AllBird(Request $request, EntityManagerInterface $entityManager, TotaldataRepository $totaldataRepository): Response
    {
    $post = [];

    $result = $totaldataRepository->findAll();
    foreach ($result as $r) {
        $post[] = [
            'id' => $r->getId(),
            'name' => $r->getName(),
        ];
    }
    return $this->json($post, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
    }

    #[Route('/allplants', name: 'app_allplant', methods: ['POST', 'GET'])]
    public function AllPlant(Request $request, EntityManagerInterface $entityManager, TotaldataRepository $totaldataRepository): Response
    {
    $post = [];

    $result = $totaldataRepository->findAll();
    foreach ($result as $r) {
        $post[] = [
            'name' => $r->getName(),
        ];
    }
    return $this->json($post, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
    }

    #[Route('/allinsect', name: 'app_allinsect', methods: ['POST', 'GET'])]
    public function AllInsect(Request $request, EntityManagerInterface $entityManager, TotaldataRepository $totaldataRepository): Response
    {
    $post = [];

    $result = $totaldataRepository->findAll();
    foreach ($result as $r) {
        $post[] = [
            'name' => $r->getName(),
        ];
    }
    return $this->json($post, $status = 200, $headers = ['Access-Control-Allow-Origin'=>'*']);
    }

}
