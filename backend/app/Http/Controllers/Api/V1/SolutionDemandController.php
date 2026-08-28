<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSolutionDemandRequest;
use App\Services\SolutionDemandService;
use Illuminate\Http\JsonResponse;

class SolutionDemandController extends Controller
{
    public function __construct(
        private readonly SolutionDemandService $demands,
    ) {
    }

    public function store(StoreSolutionDemandRequest $request): JsonResponse
    {
        $demand = $this->demands->create($request->validated());

        return response()->json([
            'message' => 'Votre demande a bien été enregistrée.',
            'data' => $demand,
        ], 201);
    }
}
