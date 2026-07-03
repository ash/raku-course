sub double($n is rw) {
    $n *= 2;
}

my $score = 21;
double($score);
say $score;
