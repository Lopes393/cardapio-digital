<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdditional extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('additional', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->boolean('is_active')->default(true);
            $table->string('icone')->nullable();
            $table->decimal('value', 13, 2)->nullable();
            $table->bigInteger('id_product')->unsigned()->index();
                    
            $table->timestamps();
            $table->foreign('id_product')->references('id')->on('product');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('additional');
    }
}
