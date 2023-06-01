<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\auth\AuthInterface;
use App\Repositories\auth\AuthRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AuthInterface::class,AuthRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
