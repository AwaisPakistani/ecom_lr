<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\auth\AuthInterface;
use App\Repositories\auth\AuthRepository;
use App\Repositories\category\CategoryInterface;
use App\Repositories\category\CategoryRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AuthInterface::class,AuthRepository::class,CategoryInterface::class,CategoryRepository::class);
        $this->app->bind(CategoryInterface::class,CategoryRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
