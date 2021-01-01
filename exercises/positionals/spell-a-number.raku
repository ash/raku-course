my $n = @*ARGS[0];

my @names = <
    zero one two three four five six seven eight nine ten
    eleven twelve thirteen fourteen fivteen sixteen seventeen eighteen nineteen twenty
    thirty fourty fifty sixty seventy eighty ninety
    >;

if $n < 20 {
    say @names[$n];
}
elsif $n % 10 { # Two-digit non-round numbers, e.g., 34
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else { # Multiples of 10, e.g., 50
    say @names[$n / 10 + 18];
}