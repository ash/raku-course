my $text = 'Programming in Raku';

say +$text.comb(/ <[aeiouAEIOU]> /);
