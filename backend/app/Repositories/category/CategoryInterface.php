<?php
namespace App\Repositories\category;
interface CategoryInterface{

    public function all();
    
    public function create();
    
    public function store(array $data);
    
    public function show($id);
    
    public function edit($id);
    
    public function update(array $data,$id);
}