<?php

namespace App\Repositories;

use App\Models\Solution;
use Illuminate\Pagination\LengthAwarePaginator;

class SolutionRepository implements SolutionRepositoryInterface
{
    public function publishedPaginated(int $perPage = 12): LengthAwarePaginator
    {
        return Solution::query()
            ->where('status', 'published')
            ->orderBy('sort_order')
            ->orderBy('id')
            ->paginate($perPage);
    }

    public function publishedBySlug(string $slug): ?Solution
    {
        return Solution::query()
            ->where('slug', $slug)
            ->where('status', 'published')
            ->first();
    }

    public function categories(): \Illuminate\Support\Collection
    {
        return Solution::query()
            ->where('status', 'published')
            ->get()
            ->groupBy('category')
            ->map(fn ($items) => $items->count())
            ->collect();
    }

    public function latestPublished(int $limit = 3): \Illuminate\Support\Collection
    {
        return Solution::query()
            ->where('status', 'published')
            ->orderByDesc('id')
            ->limit($limit)
            ->get();
    }
}
