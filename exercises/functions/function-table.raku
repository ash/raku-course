sub f($x) { $x² }

say "x\tf(x)";
loop (my $x = -3; $x <= 3; $x += 0.1) {
    say "$x\t{f($x)}";
}
