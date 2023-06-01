<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Repositories\auth\AuthInterface;
use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;

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
            'message'=>'success'
        ]);
        }else{
            return response()->json([
                'status'=>false,
                'message'=>'Your Email or Password is incorrent. So try again!'
            ]);
        }
      
    }
    
    public function register(RegisterRequest $request){
        // $request->validated();
        $data= $request->all();
        $this->user->register($data);
        return response()->json([
            'success'=>'Successfully Registered'
        ]);
     }
}
