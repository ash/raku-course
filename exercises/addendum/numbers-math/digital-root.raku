my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
