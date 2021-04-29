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

Route::get('menu', "App\Http\Controllers\api\MenuController@index");
Route::get('product', "App\Http\Controllers\api\ProductController@index");
Route::get('followUp', "App\Http\Controllers\api\FollowUpController@index");
Route::get('payment', "App\Http\Controllers\api\PaymentController@index");
