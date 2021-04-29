<?php

namespace App\Http\Controllers;
use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index()
    {
        return Payment::all();
    }

    public function store(Request $request)
    {
        return Payment::create($request->all());
    }

    public function show($id)
    {
        return Payment::where('id', $id)->first();
    }
}
