<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follow_up extends Model
{
    use HasFactory;
    
    protected $table = 'follow_up';
    protected $primaryKey = 'id';
    protected $fillable = ['id', 'description', 'is_active', 'is_free','value', 'min', 'max', 'id_product'];

    public static function getFollowUpByProduct($idProduct)
    {
        return self::select('follow_up.*')
            ->join('product as p', 'p.id', '=', 'follow_up.id_product')
            ->where('follow_up.id_product', $idProduct)
            ->get()
        ;
    }
}
