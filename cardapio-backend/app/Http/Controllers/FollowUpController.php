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

    public function show($idProduct)
    {
        $followUp = \App\Models\Follow_up::getFollowUpByProduct($idProduct);
        if (!$followUp) {
            return response(['response' => 'Não existe produto'], 400);
        }

        return response($followUp);
    }
}
