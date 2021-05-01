<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Additional extends Model
{
    use HasFactory;

    protected $table = 'additional';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'name', 'id_product', 'is_active', 'value', 'icon'];

    public static function getAdditionalsByProduct($id)
    {
        return self::selectRaw("*, 0 as qt_item")->where('id_product', $id)->get();
    }
}
