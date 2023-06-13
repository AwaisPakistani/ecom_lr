<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\category\CategoryInterface;
use App\Models\Category;
use App\Http\Requests\CategoryRequest;
class CategoryController extends Controller
{
    public $category;
    /**
     * Display a listing of the resource.
     */
    public function __construct(CategoryInterface $category){
        $this->category=$category;
    }
    public function index()
    {
        $categories = $this->category->all();
        return response()->json([
            'status'=>true,
            'categories'=>$categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->category->create();
        return response()->json([
            'status'=>true
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $data= $request->all();
        
        $this->category->store($data);
        return response()->json([
            'status'=>true,
            'message'=>'Category added Successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
