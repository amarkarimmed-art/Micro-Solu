<?php

namespace App\Repositories;

use App\Models\SolutionDemand;

class SolutionDemandRepository implements SolutionDemandRepositoryInterface
{
    public function create(array $data): SolutionDemand
    {
        return SolutionDemand::create($data);
    }
}
