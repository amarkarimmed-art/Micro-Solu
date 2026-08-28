<?php

namespace App\Repositories;

use App\Models\SolutionDemand;

interface SolutionDemandRepositoryInterface
{
    public function create(array $data): SolutionDemand;
}
