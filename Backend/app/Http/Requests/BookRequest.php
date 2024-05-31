<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BookRequest extends FormRequest
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
            'title'     => ['sometimes', 'required', 'string', 'min:2', 'max:255', Rule::unique('books')->ignore($this->book)],
            'price'  => ['sometimes', 'required', 'numeric'],
            'description'  => ['sometimes', 'required', 'string', 'min:2', 'max:255'],
        ];
    }
}
