<?php

namespace App\Entity;

use App\Repository\CoordenadasRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CoordenadasRepository::class)]
class Coordenadas
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 7)]
    private ?float $longitud = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 7)]
    private ?float $latitud = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLongitud(): ?string
    {
        return $this->longitud;
    }

    public function setLongitud(string $longitud): self
    {
        $this->longitud = $longitud;

        return $this;
    }

    public function getLatitud(): ?string
    {
        return $this->latitud;
    }

    public function setLatitud(string $latitud): self
    {
        $this->latitud = $latitud;

        return $this;
    }
}
