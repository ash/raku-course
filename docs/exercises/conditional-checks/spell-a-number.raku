my $n = @*ARGS[0];

my @names = <
    zero one two three four five six seven eight nine ten
    eleven twelve thirteen fourteen fivteen sixteen seventeen eighteen nineteen twenty
    thirty fourty fifty sixty seventy eighty ninety
    >;

if $n < 20 {
    say @names[$n];
}
elsif $n % 10 {    
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else {
    say @names[$n / 10 + 18];
}
