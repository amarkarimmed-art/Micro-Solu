<?php

namespace App\Services;

use App\Repositories\SolutionRepositoryInterface;
use Illuminate\Pagination\LengthAwarePaginator;

class SolutionService
{
    public function __construct(
        private readonly SolutionRepositoryInterface $solutions,
    ) {
    }

    public function list(int $perPage = 12): LengthAwarePaginator
    {
        return $this->solutions->publishedPaginated($perPage);
    }

    public function findBySlug(string $slug): ?\App\Models\Solution
    {
        return $this->solutions->publishedBySlug($slug);
    }

    public function categories(): array
    {
        return $this->solutions->categories()->toArray();
    }

    public function latest(int $limit = 3): \Illuminate\Support\Collection
    {
        return $this->solutions->latestPublished($limit);
    }
}
