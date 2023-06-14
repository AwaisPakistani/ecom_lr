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
        //$file = $data['image']->storeAs('images/admin/categories',$image,'public'); // To move in public
        $file = $getimage->move('images/admin/categories/',$image);// To move in public
        $category=  Category::create([
            'name'=>$data['name'],
            'image'=>$file
        ]);
        return $category;
    }
    
    public function show($id){
        $category = Category::where('id',$id)->first();
        return $category;
    }
    
    public function edit($id){
        $category = Category::where('id',$id)->first();
        return $category;
    }

    public function update(array $data,$id){
            $category = Category::where('id',$id)->first();
        
            $getimage = $data['image'];
            $image = $getimage->getClientOriginalName();
            $file = $getimage->move('images/admin/categories/',$image);
            $update_category=  Category::where('id',$id)->update([
                'name'=>$data['name'],
                'image'=>$file
            ]);
            
        
            return $update_category;
    }

    public function destroy($id){
        $imagepath=Category::where('id',$id)->first();
        $path=$imagepath->image;
        if(file_exists($path)){
            unlink($path);
        }
        
        return $category = Category::where('id',$id)->delete();
        
    }
}