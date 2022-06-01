<?php

namespace App\Http\Controllers;
use App\Models\ExpenseCategory;
use Illuminate\Http\Request;

class ExpenseCategoryController extends Controller
{
  public function getAllExpenseCategories() {
   return ExpenseCategory::orderBy('created_at', 'desc')->get();
 }

    public function createExpenseCategory(Request $request) {
        $expenses_category = new ExpenseCategory();
        // $expenses->transactionId = $request->transactionId;
        $expenses_category->expenseCategoryType = $request->expenseCategoryType;
        $expenses_category->description = $request->description;
        // $expenses->amount = $request->amount;
        $expenses_category->save();

        return response()->json([
            "message" => "Expense Category record created"
        ], 201);
      }

      public function getOneExpenseCategory($id) {
      return ExpenseCategory::find($id);
    }
}
