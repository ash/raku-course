my $text = 'HELLO';

$text ~~ tr/A..Z/D..ZA..C/;

say $text;
