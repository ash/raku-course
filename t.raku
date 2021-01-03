sub f(:$a, :$b) {
    $a - $b
}

my $a = 1;
my $b = 2;
my $c = 3;

say f(a => $a, b => $b);
say f(a => $c, b => $c);
# say f($a, $b);
say f(:$a, :$b);
# say f($:a, $:b);
# say f(:$b, :$c);
# say f(:$a, c => $c);
say f(:$a, b => $c);


say f(:$a, :b($c));
say f(:a($a), :b($c));
