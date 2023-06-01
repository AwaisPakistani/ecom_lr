<?php
namespace App\Repositories\auth;

interface AuthInterface{
  public function all();

  public function login(array $data);

  public function register(array $data);

  public function logout();
}