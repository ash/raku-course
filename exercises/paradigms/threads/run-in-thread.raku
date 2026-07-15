my $t = Thread.start({ say 'working' });
$t.finish;
