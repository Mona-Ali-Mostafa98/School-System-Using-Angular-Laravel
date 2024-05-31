<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StudentRequest;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::where('status', 'active')
            ->with('department:id,name')
            ->orderBy('name','asc')
            ->paginate(15);

        return response()->json($students , 200) ;
    }

    public function store(StudentRequest $request){
        $data = $request->except('_method', '_token');
        $student = Student::create($data);
        return response()->json(["message"=> "Student added successfully", "student"=>$student]);
    }


}
