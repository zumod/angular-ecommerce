<?php

    require "../dbConfig.php";
    $db=new Connect;
    $post=file_get_contents("php://input");
    $content=(array)json_decode($post);

    $squery="INSERT INTO products (`category,name,price,discount_price,description,image`) VALUES ('".$content['category'].$content['product_name'].$content['price'].$content['discount_price'].$content['description'].$content['photo']."')";
    $result=$db->query($squery);

    echo "Product added"; 

?>