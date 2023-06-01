<?php
namespace App\Repositories\auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Repositories\auth\AuthInterface;
use App\Models\User;
use App\Http\Requests\LoginRequest;


class AuthRepository implements AuthInterface{

  public function all(){
     return User::get();
  }
  
  public function login(array $data){
       if (Auth::guard('web')->attempt(['email'=>$data['email'],'password'=>$data['password']])) {
            return response()->json([
                'message'=>'success'
            ]);
        }else{
            return response()->json([
                'message'=>'error'
            ]);
        }
  }

  public function register(array $data){
   $user=  User::create([
      'name'=>$data['name'],
      'email'=>$data['email'],
      'password'=>bcrypt($data['password'])
    ]);
   return $user;
  }

  public function logout(){
    //
  }
}