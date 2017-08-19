<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClassThemeTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('class-theme', function(Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('description')->nullable();
            $table->integer('category_id')->unsigned();;
            $table->foreign('category_id')->references('id')->on('category');
            $table->decimal('price', 10, 2);
            $table->datetime('start');
            $table->datetime('finish');
            $table->integer('consultant_id')->unsigned();;
            $table->foreign('consultant_id')->references('id')->on('consultant');
            $table->integer('address_id')->unsigned();;
            $table->foreign('address_id')->references('id')->on('address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('class-theme');
    }

}
