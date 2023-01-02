<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler(); 

$validator = $pp->getValidator();
$validator->fields(['nom','email','message'])->areRequired();
$validator->field('nom')->maxLength(50);
$validator->field('email')->isEmail();
$validator->field('message')->maxLength(2000);


$pp->sendEmailTo('contact@shockfx-esport.com'); // ← Your email here

echo $pp->process($_POST);
