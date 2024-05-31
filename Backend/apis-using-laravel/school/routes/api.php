<?php

use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\StudentController;
use App\Http\Controllers\Api\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
//
//Route('/login', function (Request $request) {
//    $request->validate([
//        'email' => 'required|email',
//        'password' => 'required',
//        'device_name' => 'required',
//    ]);
//
//    $user = User::where('email', $request->email)->first();
//
//    if (! $user || ! Hash::check($request->password, $user->password)) {
//        throw ValidationException::withMessages([
//            'email' => ['The provided credentials are incorrect.'],
//        ]);
//    }
//
//    return $user->createToken($request->device_name)->plainTextToken;
//});
//middleware('auth:sanctum')->
Route::prefix('departments')->group(function (){
    Route::get('/', [DepartmentController::class, "index"]);
    Route::post('/', [DepartmentController::class, "store"]);
    Route::get('/{department}', [DepartmentController::class, "show"]);
    Route::put('/{department}', [DepartmentController::class, "update"]);
    Route::delete('/{department}', [DepartmentController::class, "destroy"]);
});

Route::prefix('students')->group(function () {
    Route::get('/', [StudentController::class, "index"]);
    Route::post('/', [StudentController::class, "store"]);
    Route::get('/{student}', [StudentController::class, "show"]);
    Route::put('/{student}', [StudentController::class, "update"]);
    Route::delete('/{student}', [StudentController::class, "destroy"]);
});


Route::prefix('books')->group(function () {
    Route::get('/', [BookController::class, "index"]);
    Route::post('/', [BookController::class, "store"]);
    Route::get('/{book}', [BookController::class, "show"]);
    Route::put('/{book}', [BookController::class, "update"]);
    Route::delete('/{book}', [BookController::class, "destroy"]);
});
