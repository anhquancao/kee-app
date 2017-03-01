<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class PublicController extends Controller
{
    public function reactIndex()
    {
        return File::get(public_path() . '/client/dist/index.html');
    }
}
