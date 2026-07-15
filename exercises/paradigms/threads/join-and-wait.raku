my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
