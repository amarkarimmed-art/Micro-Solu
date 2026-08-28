<?php

use App\Http\Controllers\Api\V1\SolutionController;
use App\Http\Controllers\Api\V1\SolutionDemandController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::get('solutions', [SolutionController::class, 'index']);
    Route::get('solutions/categories', [SolutionController::class, 'categories']);
    Route::get('solutions/{slug}', [SolutionController::class, 'show']);

    Route::post('demands', [SolutionDemandController::class, 'store']);
});
