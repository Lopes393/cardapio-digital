<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('user', "App\Http\Controllers\UserController@index");
Route::get('user/{bussinesKey}', "App\Http\Controllers\UserController@show");

Route::get('/menu/{bussinesKey}', "App\Http\Controllers\MenuController@show");
Route::get('/product/{idMenu}', "App\Http\Controllers\ProductController@show");
Route::get('/additional/{idProduto}', "App\Http\Controllers\ProductController@getAdditional");
Route::get('/followUp/{idProduct}', "App\Http\Controllers\FollowUpController@show");
Route::get('payment', "App\Http\Controllers\PaymentController@index");
