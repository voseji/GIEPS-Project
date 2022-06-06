<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IncomeCategory extends Model
{
    protected $table = 'Income_category';

  protected $fillable = ['incomeCategoryType', 'description'];

}
