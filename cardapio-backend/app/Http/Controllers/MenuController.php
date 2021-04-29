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

    public function show($name)
    {
        $menu = \App\Models\Menu::getMenuByName($name);
        if (!$menu) {
            return response(['response' => 'Não existe Menu'], 400);
        }

        return response($menu);
    }
}
