my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
