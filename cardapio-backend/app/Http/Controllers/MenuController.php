<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index()
    {
        return Menu::where('is_active', true)->get();
    }

    public function store(Request $request)
    {
        return Menu::create($request->all());
    }

    public function show($bussinesKey)
    {
        $menu = \App\Models\Menu::getMenuByBussinesKey($bussinesKey);
        if (!$menu) {
            return response(['response' => 'Não existe Menu'], 400);
        }

        return response($menu);
    }
}
