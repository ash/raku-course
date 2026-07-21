my $messy = '  too    many     spaces   ';

say $messy.trim.subst(/\s+/, ' ', :g);
