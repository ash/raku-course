spurt 'number.txt', "42\n";

my $n = slurp('number.txt').trim.Int;
say $n * 2;
