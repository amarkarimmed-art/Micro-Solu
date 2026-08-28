<?php

namespace App\Repositories;

use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

interface SolutionRepositoryInterface
{
    public function publishedPaginated(int $perPage = 12): LengthAwarePaginator;

    public function publishedBySlug(string $slug): ?\App\Models\Solution;

    public function categories(): Collection;

    public function latestPublished(int $limit = 3): Collection;
}
