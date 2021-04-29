<?php

namespace App\Http\Controllers;
use App\Models\Follow_up;
use Illuminate\Http\Request;

class FollowUpController extends Controller
{
    public function index()
    {
        return Follow_up::all();
    }

    public function store(Request $request)
    {
        return Follow_up::create($request->all());
    }

    public function show($id)
    {
        return Follow_up::where('id', $id)->first();
    }
}
