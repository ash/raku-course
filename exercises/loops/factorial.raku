my $n = @*ARGS[0];

my $f = 1;
$f *= $_ for 1..$n;

say $f;
