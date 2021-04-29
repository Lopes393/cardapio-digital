<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $table = 'menu';
    protected $primaryKey = 'id';
<<<<<<< HEAD

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
=======
    protected $fillable = ['id', 'description', 'value_delivery', 'is_active', 'id_user'];
>>>>>>> 9ae3510e849b2bd4e6bc61ab719f00c217af60f8
}
