<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::get('/home', 'HomeController@index');
Route::get('/', "PublicController@reactIndex");
Route::get('/dashboard', "PublicController@reactIndex");
Route::get('/login', "PublicController@reactIndex");
Route::get('/logout', "PublicController@reactIndex");
Route::get('/register', "PublicController@reactIndex");