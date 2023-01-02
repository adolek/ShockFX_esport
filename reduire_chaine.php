<?php

function Reduire_Chaine($string)
{
  $string=strip_tags($string);
  $words = explode(' ', $string, 2);
  
  $fin='';
  return implode(' ', $words).$fin;
}

?>