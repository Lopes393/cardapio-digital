<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $table = 'menu';
    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'description',
        'value_delivery',
        'is_active',
        'id_user',
    ];

    public static function getMenuByBussinesKey($bussinesKey)
    {
        return self::select('menu.*')
            ->join('user as u', 'u.id', '=', 'menu.id_user')
            ->where('u.bussines_key', $bussinesKey)
            ->where('menu.is_active', true)
            ->get()
        ;
    }
}
