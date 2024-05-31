<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'          => ['sometimes', 'required', 'string', 'min:2', 'max:255'],
            'age'           => ['sometimes', 'required', 'numeric'],
            'email'         => ['required','email','max:255' , Rule::unique('students')->ignore($this->student)],
            'department_id' => ['sometimes','required','exists:departments,id'],
        ];
    }
}
