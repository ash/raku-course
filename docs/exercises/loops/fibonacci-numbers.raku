my $F0 = 0;
my $F1 = 1;

say $F0;
for ^19 {
    ($F0, $F1) = $F1, $F0 + $F1;
    say $F0;
}
