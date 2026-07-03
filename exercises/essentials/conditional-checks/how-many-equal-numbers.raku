my $n1 = prompt 'Enter number 1: ';
my $n2 = prompt 'Enter number 2: ';
my $n3 = prompt 'Enter number 3: ';

if $n1 == $n2 == $n3 {
    say 3;
}
elsif $n1 == $n2 || $n2 == $n3 || $n1 == $n3 {
    say 2;
}
else {
    say 0;
}
