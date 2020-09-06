<?php
if(preg_match("~^(\+?[0-9]{9,14})$~i", $_POST['phone'])){
    echo '<pre>';
    print_r($_POST);
    echo '</pre>';
    header("refresh:6; url=/");
exit;

}else{
    echo 'Вы ввели не верно номер телефона';
    header("refresh:3; url=/");
}


// $message = "
// <p>Name: {$_POST["name"]}</p>
// <p>Phone: {$_POST["phone"]}</p>
// <p>Comment: {$_POST["comment"]}</p>
// ";

// mail('z6228811@gmail.com', 'levanilli form_contact_page', $message);