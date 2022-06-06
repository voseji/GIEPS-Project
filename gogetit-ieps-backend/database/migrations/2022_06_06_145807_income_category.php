<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class IncomeCategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Income_category', function (Blueprint $table) {
        $table->increments('id');
        $table->string('incomeCategoryType');
        $table->string('description');
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
