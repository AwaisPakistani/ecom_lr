<?php
namespace App\Traits;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

trait ApiErrorResponse{
    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json([
            'status'=>false,
            'message'=>'Validation Error',
            'errors'=>$validator->errors()
        ]));
    }
}