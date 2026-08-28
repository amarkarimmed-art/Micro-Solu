<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Services\SolutionService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SolutionController extends Controller
{
    public function __construct(
        private readonly SolutionService $solutions,
    ) {
    }

    public function index(Request $request): JsonResponse
    {
        $perPage = min((int) $request->query('per_page', 12), 50);
        $result = $this->solutions->list($perPage);

        return response()->json([
            'data' => $result->items(),
            'meta' => [
                'current_page' => $result->currentPage(),
                'last_page' => $result->lastPage(),
                'per_page' => $result->perPage(),
                'total' => $result->total(),
            ],
        ]);
    }

    public function categories(): JsonResponse
    {
        return response()->json([
            'data' => $this->solutions->categories(),
        ]);
    }

    public function show(Request $request, string $slug): JsonResponse
    {
        $solution = $this->solutions->findBySlug($slug);

        if (! $solution) {
            return response()->json(['message' => 'Solution introuvable.'], 404);
        }

        return response()->json(['data' => $solution]);
    }
}
