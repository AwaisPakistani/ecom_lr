<?php
namespace App\Repositories\category;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Repositories\category\CategoryInterface;
use App\Models\Category;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;

class CategoryRepository implements CategoryInterface{
    public function all(){
        $categories = Category::all();
        return CategoryResource::collection($categories);
    }
    
    public function create(){
        $title = 'Add Category';
        return $title;
    }
    
    public function store(array $data){
        //$file = $data['image']
        $getimage = $data['image'];
        $image = $getimage->getClientOriginalName();
        //$file = $data['image']->storeAs('images/admin/categories',$image,'public'); // To move in storage
        $file = $getimage->move('images/admin/categories/',$image);// To move in public
        $category=  Category::create([
            'name'=>$data['name'],
            'image'=>$file
        ]);
        return $category;
    }
    
    public function show($id){

    }
    
    public function edit($id){

    }

    public function update(array $data,$id){

    }
}