<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpenseCategory extends Model
{
  protected $table = 'Expense_category';

  protected $fillable = ['expenseCategoryType', 'description'];

}
