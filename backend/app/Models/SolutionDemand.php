<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'company',
    'contact_name',
    'email',
    'phone',
    'problem',
    'budget_range',
    'status',
])]
class SolutionDemand extends Model
{
    protected $casts = [
        'status' => 'string',
    ];

    public function scopeNew($query)
    {
        return $query->where('status', 'new');
    }
}
