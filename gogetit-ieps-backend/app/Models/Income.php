<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
  protected $table = 'Income';

  protected $fillable = ['incomeId', 'description', 'amount', 'incomeCategory' ];

}
