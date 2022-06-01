<?php

namespace App\Http\Controllers;
use App\Models\Income;
use Illuminate\Http\Request;

class IncomeController extends Controller
{
  public function getAllIncomes() {
   return Income::orderBy('created_at', 'desc')->get();
 }

    public function createIncome(Request $request) {
        $expenses = new Income();
        $expenses->incomeId = $request->incomeId;
        $expenses->incomeCategory = $request->incomeCategory;
        $expenses->description = $request->description;
        $expenses->amount = $request->amount;
        $expenses->save();

        return response()->json([
            "message" => "Income record created"
        ], 201);
      }

      public function getOneIncome($id) {
      return Income::find($id);
    }
}
