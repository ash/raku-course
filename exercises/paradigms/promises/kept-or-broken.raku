my $p = start { 10 };
await $p;
say $p.status;
