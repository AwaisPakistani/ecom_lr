<?php
namespace App\Repositories\auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Repositories\auth\AuthInterface;
use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Resources\UserResource;
class AuthRepository implements AuthInterface{

  public function all(){
     $users = User::get();
     return UserResource::collection($users);
    // return $users->each(function($user){
    //    return  date("d-m-Y", strtotime($user->created_at));
    // });
    // return $users->filter(function($user){
    //    return $user->id < 5 ;
    // });
    // return $users->search(function($user){
    //    return $user->email == 'admin@gmail.com';
    // });
    // $newDate = date("d-m-Y", strtotime($originalDate));
    
     
      
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
      'role'=>$data['role'],
      'phone'=>$data['phone'],
      'password'=>bcrypt($data['password']),
      'remember_token'=>Str::random(15)
    ]);
   return $user;
  }

  public function edit($id){
      $useredit = User::where('id',$id)->first();
      return $useredit;
  }

  public function update(array $data,$id){
    $edit =  User::where('id',$id)->update([
      'name'=>$data['name'],
      'email'=>$data['email']
    ]);
   return $edit;
  }

  public function delete($id){
    $deleteuser = User::where('id',$id)->delete();
    return $deleteuser;
  }

  public function logout(){
    //
  }
}