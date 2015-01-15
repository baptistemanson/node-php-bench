<?php
$path = 'tests/';
if (!file_exists($path)) {
    mkdir($path, 0777, true);
}

//index.php
$s=""; //generate a random string of 108KB and a random filename
$fname = $path.(rand(0,57)+65).chr(rand(0,57)+65).chr(rand(0,57)+65).chr(rand(0,57)+65).'.txt';
for($i=0;$i<108000;$i++)
{
	$n=rand(0,57)+65;
	$s .= chr($n);
}
 
//write s to a file
file_put_contents($fname,$s);
readfile($fname);
	