<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DepartmentRequest;
use App\Models\Department;

class DepartmentController extends Controller
{

    public function index()
    {
        $departments = Department::where('status', 'active')
            ->orderBy("id", "DESC")
            ->with('user')
            ->get();
        // return DepartmentResource::collection($departments);
        return response()->json($departments , 200) ;
    }


    public function store(DepartmentRequest $request)
    {
        $data = $request->except('_method' , '_token');
        $department = Department::create($data);
        return response()->json(["message"=> "Department added successfully", "department"=>$department]);
    }

    public function show(string $id)
    {
        $department = Department::findOrFail($id);
        return response()->json($department , 200) ;
    }

    public function update(DepartmentRequest $request, string $id)
    {
        $department = Department::findOrFail($id);
        $data = $request->except('_token', '_method');
        $department->update($data);
        return response()->json(["message"=> "Department updated successfully", "department"=>$department]);
    }


    public function destroy(string $id)
    {
        $department = Department::findOrFail($id);
        $department->delete();

        return response()->json(["message"=> "Department deleted successfully", "department"=>$department]);
    }
}
