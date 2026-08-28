<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

#[Fillable([
    'title',
    'slug',
    'category',
    'excerpt',
    'description',
    'image_url',
    'price_cents',
    'features',
    'status',
    'sort_order',
])]
#[Hidden(['pivot'])]
class Solution extends Model
{
    protected $casts = [
        'features' => 'array',
        'price_cents' => 'integer',
        'sort_order' => 'integer',
    ];

    public static function booted(): void
    {
        static::creating(function (Solution $solution) {
            if (empty($solution->slug)) {
                $solution->slug = Str::slug($solution->title);
            }
        });
    }

    public function formattedPrice(): string
    {
        return number_format($this->price_cents / 100, 2, ',', ' ') . ' €';
    }
}
