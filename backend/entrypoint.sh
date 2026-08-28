#!/bin/sh
set -e

cd /var/www/html

# Bootstrap Laravel skeleton if the project is not yet initialized
if [ ! -f artisan ]; then
    echo "[entrypoint] Creating Laravel project..."
    # generate into a temp dir, then copy in (avoids "directory not empty"
    # caused by the Dockerfile / entrypoint.sh already present in the volume)
    rm -rf /tmp/laravel-app
    composer create-project laravel/laravel /tmp/laravel-app --no-interaction --prefer-dist
    cp -a /tmp/laravel-app/. /var/www/html/
    rm -rf /tmp/laravel-app
fi

# Install dependencies
if [ ! -d vendor ]; then
    echo "[entrypoint] Installing Composer dependencies..."
    composer install --no-interaction --prefer-dist
fi

# Create storage / bootstrap cache directories if missing
mkdir -p storage/framework/{cache/sessions,views} bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

# Copy default .env if missing
if [ ! -f .env ]; then
    if [ -f .env.example ]; then
        cp .env.example .env
    fi
    echo "[entrypoint] Generated .env (please check database settings)"
fi

# Cache clearing for good measure
php artisan optimize:clear > /dev/null 2>&1 || true

echo "[entrypoint] Starting PHP-FPM..."
exec php-fpm
