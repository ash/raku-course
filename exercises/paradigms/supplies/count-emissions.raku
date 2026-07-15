my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
