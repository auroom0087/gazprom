<?php
Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function() {
    Route::post('signin', 'SignInController');
    Route::post('signout', 'SignOutController');
    Route::post('me', 'MeController');
    
    //изменил
});

Route::group(['prefix' => 'auth'], function() {
    Route::post('createProp', 'TicketController@store');
    Route::get('getMyProps/{id}', 'TicketController@index');
    Route::get('showProp/{title}', 'TicketController@show');
    Route::get('deleteProp/{title}', 'TicketController@destroy');
});


Route::group(['prefix' => 'auth'], function() {
    Route::post('createPost', 'BlogController@store');
    Route::put('getMyPosts/{id}', 'BlogController@index');
    Route::get('showPost/{id}', 'BlogController@show');

    Route::put('updatePost/{id}', 'BlogController@update');
    Route::get('deletePost/{title}', 'BlogController@destroy');

    Route::post('like', 'BlogController@like');
});
