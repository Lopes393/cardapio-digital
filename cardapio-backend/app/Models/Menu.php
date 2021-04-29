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

    public static function getMenuByName($name)
    {
        $query = self::select(
            'user.bussines_key',
            'user.bussines',
            'user.phone',
            'menu.id',
            'menu.description',
            'menu.value_delivery'
        )
            ->join('user as u', 'u.id', '=', 'menu.id_user')
        ;

        return \App\Models\Filter::paginate($query);
    }
}
