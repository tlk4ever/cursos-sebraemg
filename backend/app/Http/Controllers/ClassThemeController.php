<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ClassTheme;
use App\Consultant;
use App\Address;
use App\Category;

class ClassThemeController extends Controller
{
    public function index (){
        
        $classTheme = new ClassTheme();
        $classThemes = $classTheme->all();
        $list = array();
        foreach ($classThemes as $row) {
            
            $category = $this->getCategory($row->category_id);
            $consultant = $this->getConsultant($row->consultant_id);
            $address = $this->getAddress($row->address_id);
            
            $list [] = array(
                "id"=>$row->id,
                "title"=>$row->title,
                "category"=>$category->title,
                "description"=>$row->description,
                "price"=>$row->price,
                "start"=>$row->start,
                "finish"=>$row->finish,
                "consultant"=>array(
                    "name"=>$consultant->name,
                    "avatar"=>$consultant->avatar
                ),
                "address"=>array(
                    "street"=>$address->street,
                    "number"=>$address->number,
                    "neighborhood"=>$address->neighborhood,
                    "city"=>$address->city
                )
            );
        }
        return $list;
    }
    
    private function getCategory($id){
        return Category::find($id);
    }

    private function getConsultant ($id){
        return Consultant::find($id);
    }
    
    private function getAddress ($id){
        return Address::find($id);
    }
}
