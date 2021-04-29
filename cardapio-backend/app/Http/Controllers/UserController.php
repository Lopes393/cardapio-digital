<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        return User::create($request->all());
    }

    public function show($bussinesKey)
    {
        return User::where('bussines_key', $bussinesKey)->first();
    }
}
