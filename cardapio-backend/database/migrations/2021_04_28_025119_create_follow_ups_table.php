<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFollowUpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('follow_up', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->boolean('is_free')->default(false);
            $table->decimal('value')->nullable();
            $table->bigInteger('min');
            $table->bigInteger('max');
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
        Schema::dropIfExists('follow_up');
    }
}
