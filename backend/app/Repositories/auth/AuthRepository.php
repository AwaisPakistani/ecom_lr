<?php
namespace App\Repositories\auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Repositories\auth\AuthInterface;
use App\Models\User;
use App\Http\Requests\LoginRequest;

class AuthRepository implements AuthInterface{

  public function all(){
     return User::get();
  }
  
  public function login(array $data){
    $user = User::where('email',$data['email'])->first();
    if (Auth::guard('web')->attempt(['email'=>$data['email'],'password'=>$data['password']])) {
      return response()->json([
          'status'=>true,
          'user'=>$user,
          'access_token'=>$user->remember_token,
          'message'=>'success'
      ]);
      }else{
          return response()->json([
              'status'=>false,
              'user'=>'fail',
              'access_token'=>'',
              'message'=>'Your Email or Password is incorrent. So try again!'
          ]);
      }
  }

  public function register(array $data){
   $user=  User::create([
      'name'=>$data['name'],
      'email'=>$data['email'],
      'password'=>bcrypt($data['password']),
      'remember_token'=>Str::random(15)
    ]);
   return $user;
  }

  public function logout(){
    //
  }
}