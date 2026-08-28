# Laravel backend image (PHP-FPM, Debian-based to avoid Alpine clang/llvm toolchain issues)
FROM php:8.3-fpm

# System dependencies for PostgreSQL, zip, and build tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install pdo_pgsql zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Entrypoint: bootstrap Laravel if not yet installed, then run PHP-FPM
COPY entrypoint.sh /usr/local/bin/entrypoint
RUN chmod +x /usr/local/bin/entrypoint

EXPOSE 9000
CMD ["/usr/local/bin/entrypoint"]
