<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    // Relationship
    public function posts(){
        return $this->hasMany(Post::class, 'id');
    }
}
