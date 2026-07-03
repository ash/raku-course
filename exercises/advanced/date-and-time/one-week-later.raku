my $later = Date.new(2027, 2, 28).later(:days(7));
say $later;
say $later.day-of-week;
