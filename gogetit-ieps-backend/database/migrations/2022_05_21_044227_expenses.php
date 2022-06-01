<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Expenses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('Expenses', function (Blueprint $table) {
      $table->increments('id');
      $table->string('transactionId');
      $table->string('expenseCategory');
      $table->string('description');
      $table->string('amount');
      // $table->string('status')->default("INACTIVE");
      $table->timestamps();
      $table->softDeletes();
  });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
