my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
