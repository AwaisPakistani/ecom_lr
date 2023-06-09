<?php
namespace App\Repositories\auth;

interface AuthInterface{
  public function all();

  public function login(array $data);

  public function register(array $data);

  public function edit($id);

  public function update(array $data,$id);

  public function delete($id);

  public function logout();
}