<?php

namespace App\Http\Controllers;
use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        return Menu::all();
    }

    public function store(Request $request)
    {
        return Menu::create($request->all());
    }

    public function show($id)
    {
        return Menu::where('id', $id)->first();
    }
}
