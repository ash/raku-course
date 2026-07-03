my $sum = 0;
my @result = gather for 1..100 {
    $sum += $_;
    last if $sum > 10;
    take $_;
}

say @result;
