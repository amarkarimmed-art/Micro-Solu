<?php

namespace App\Providers;

use App\Repositories\SolutionDemandRepository;
use App\Repositories\SolutionDemandRepositoryInterface;
use App\Repositories\SolutionRepository;
use App\Repositories\SolutionRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(SolutionRepositoryInterface::class, SolutionRepository::class);
        $this->app->bind(SolutionDemandRepositoryInterface::class, SolutionDemandRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
