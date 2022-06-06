<?php

namespace App\Http\Controllers;
use App\Models\IncomeCategory;

use Illuminate\Http\Request;

class IncomeCategoryController extends Controller
{
    public function getAllIncomeCategories() {
        return IncomeCategory::orderBy('created_at', 'desc')->get();
      }
     
         public function createIncomeCategory(Request $request) {
             $income_category = new IncomeCategory();
             // $expenses->transactionId = $request->transactionId;
             $income_category->incomeCategoryType = $request->incomeCategoryType;
             $income_category->description = $request->description;
             // $expenses->amount = $request->amount;
             $income_category->save();
     
             return response()->json([
                 "message" => "Income Category record created"
             ], 201);
           }
     
           public function getOneIncomeeCategory($id) {
           return IncomeCategory::find($id);
         }
}
