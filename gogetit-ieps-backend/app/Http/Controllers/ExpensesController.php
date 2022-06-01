<?php

namespace App\Http\Controllers;
use App\Models\Expenses;
use Illuminate\Http\Request;

class ExpensesController extends Controller
{
  public function getAllExpenses() {
   return Expenses::orderBy('created_at', 'desc')->get();
 }

    public function createExpense(Request $request) {
        $expenses = new Expenses();
        $expenses->transactionId = $request->transactionId;
        $expenses->expenseCategory = $request->expenseCategory;
        $expenses->description = $request->description;
        $expenses->amount = $request->amount;
        $expenses->save();

        return response()->json([
            "message" => "Expense record created"
        ], 201);
      }

      public function getOneExpense($id) {
      return Expenses::find($id);
    }
}
