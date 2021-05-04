<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'product';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'name', 'description', 'is_active', 'id_menu', 'value'];

    public static function getProductsByMenu($idMenu)
    {
        return self::select('product.*')
            ->join('menu as m', 'm.id', '=', 'product.id_menu')
            ->where('product.id_menu', $idMenu)
            ->where('product.is_active', true)
            ->get()
        ;
    }
}
