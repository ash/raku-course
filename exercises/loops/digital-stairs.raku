my $size = prompt 'Enter the size: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
