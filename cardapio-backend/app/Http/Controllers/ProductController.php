<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        return Product::create($request->all());
    }

    public function show($idMenu)
    {
        $product = \App\Models\Product::getProductsByMenu($idMenu);
        if (!$product) {
            return response(['response' => 'Não existe produto'], 400);
        }

        return response($product);
    }
}
