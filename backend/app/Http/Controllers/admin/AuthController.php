<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Repositories\auth\AuthInterface;
use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public $user;
    public function __construct(AuthInterface $user){
       $this->user=$user;
    }
    public function index(){
        $users = $this->user->all();
        return response()->json([
            'users'=>$users
        ]);
    }
    public function login(LoginRequest $request){
       //$request->validated();
       $data= $request->all();
       $this->user->login($data);
    
       $user = User::where('email',$data['email'])->first();
        if (Auth::guard('web')->attempt(['email'=>$data['email'],'password'=>$data['password']])) {
         return response()->json([
             'status'=>true,
             'user'=>$user,
             'access_token'=>$user->remember_token,
             'message'=>'You have logged in successfully'
         ]);
         }else{
             return response()->json([
                 'status'=>false,
                 'user'=>'fail',
                 'access_token'=>'',
                 'message'=>'Your Email or Password is incorrent. So try again!'
             ]);
         }
       
       //$safe =$request->safe()->only(['email','password']);
       
       
       

        
      
    }
    
    public function register(RegisterRequest $request)
    {
        $data= $request->all();
        $this->user->register($data);
        return response()->json([
            'status'=>true,
            'message'=>'Registered Successfully'
        ]);
    }
    public function edit($id){
        $user = $this->user->edit($id);
        return response()->json([
            'name'=>$user->name,
            'email'=>$user->email
        ]);
    }
    public function update(Request $request,$id){
        $data= $request->all();
        $this->user->update($data,$id);
        return response()->json([
            'msg'=>'Successfully Updated'
        ]);
    }
    public function delete($id){
        $this->user->delete($id);
        return response()->json([
            'msg'=>'Successfully deleted having'.$id
        ]);
    }
}
