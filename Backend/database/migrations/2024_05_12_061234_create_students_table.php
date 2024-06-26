<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('mobile_number')->unique()->nullable();
            $table->integer('age')->default(20);
            $table->string('password')->nullable();
            $table->foreignId('department_id')
                ->nullable()
                ->constrained('departments')
                ->references('id')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->enum('status', ['active', 'inactive', 'archived', 'deleted'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
