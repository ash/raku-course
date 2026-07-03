my $email = 'user@example.com';

my $at = $email.index('@');
say $email.substr($at + 1);
