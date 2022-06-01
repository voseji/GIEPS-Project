<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Income extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('Income', function (Blueprint $table) {
      $table->increments('id');
      $table->string('incomeId');
      $table->string('incomeCategory');
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
