<?php

use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\StudentController;
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
//Route::group(function () {
//});

Route::get('/departments', [DepartmentController::class, "index"]);
Route::post('/departments', [DepartmentController::class, "store"]);
Route::get('/departments/{department}', [DepartmentController::class, "show"]);
Route::put('/departments/{department}', [DepartmentController::class, "update"]);
Route::delete('/departments/{department}', [DepartmentController::class, "destroy"]);



Route::get('/students', [StudentController::class, "index"]);
Route::post('/students', [StudentController::class, "store"]);
Route::get('/students/{student}', [StudentController::class, "show"]);
Route::put('/students/{student}', [StudentController::class, "update"]);
Route::delete('/students/{student}', [StudentController::class, "destroy"]);


