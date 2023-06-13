<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\{
    AuthController,
    CategoryController
};

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login',[AuthController::class,'login'])->name('login');
Route::post('register',[AuthController::class,'register'])->name('register');

Route::get('admin/users',[AuthController::class,'index'])->name('users');

Route::get('admin/edit/{id}',[AuthController::class,'edit'])->name('admin.edit');
///admin/update/
Route::put('admin/update/{id}',[AuthController::class,'update'])->name('admin.update');
///admin/
Route::delete('admin/{id}',[AuthController::class,'delete'])->name('admin.delete');
//Category
Route::get('categories',[CategoryController::class,'index']);
Route::get('category',[CategoryController::class,'create']);
Route::post('category/add',[CategoryController::class,'store']);
Route::get('category/show/{id}',[CategoryController::class,'show']);
Route::get('category/edit/{id}',[CategoryController::class,'edit']);
Route::put('category/update/{id}',[CategoryController::class,'update']);
Route::delete('category/delete/{id}',[CategoryController::class,'destroy']);