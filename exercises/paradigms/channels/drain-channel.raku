my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
