<?php

namespace App\Services;

use App\Models\SolutionDemand;
use App\Repositories\SolutionDemandRepositoryInterface;

class SolutionDemandService
{
    public function __construct(
        private readonly SolutionDemandRepositoryInterface $demands,
    ) {
    }

    public function create(array $data): SolutionDemand
    {
        return $this->demands->create($data);
    }
}
