<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class RegisterUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Bạn cần nhập tên',
            'email.required' => 'Bạn cần nhập email',
            'password.required' => 'Bạn cần nhập mật khẩu',
            'password.confirmed' => "Xác nhận mật khẩu chưa khớp",
            'email.email' => "Email chưa đúng dịnh dạng",
            'password.min' => "Mật khẩu cần có ít nhất 8 kí tự"
        ];
    }

    public function wantsJson()
    {
        return true;
    }
}
