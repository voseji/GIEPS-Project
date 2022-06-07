<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExpensesController;
use App\Http\Controllers\IncomeController;
use App\Http\Controllers\ExpenseCategoryController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\IncomeCategoryController;
// use App\Providers\Passport
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



Route::get('expenses', [ExpensesController::class,'getAllExpenses']);
Route::post('expenses', [ExpensesController::class,'createExpense']);
Route::get('expenses/{id}', [ExpensesController::class,'getOneExpense']);


Route::get('income', [IncomeController::class,'getAllIncomes']);
Route::post('income', [IncomeController::class,'createIncome']);
Route::get('income/{id}', [IncomeController::class,'getOneIncome']);

Route::get('expense_category', [ExpenseCategoryController::class,'getAllExpenseCategories']);
Route::post('expense_category', [ExpenseCategoryController::class,'createExpenseCategory']);
Route::get('expense_category/{id}', [ExpenseCategoryController::class,'getOneExpenseCategory']);

Route::get('income_category', [IncomeCategoryController::class,'getAllIncomeCategories']);
Route::post('income_category', [IncomeCategoryController::class,'createIncomeCategory']);
Route::get('income_category/{id}', [IncomeCategoryController::class,'getOneIncomeCategory']);




//Auth routes
Route::post('login', [AuthController::class,'login']);
Route::post('register', [AuthController::class,'register']);
// Route::post('login', 'AuthController@login');
// Route::post('register', 'AuthController@register');

// Route for admin permissions
Route::prefix('admin')->group(function() {
	Route::post('login', 'AuthController@adminLogin');
	Route::post('register', 'AuthController@adminRegister');
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
