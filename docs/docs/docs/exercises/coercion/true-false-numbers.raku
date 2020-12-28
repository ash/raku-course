my $value = 42;
say ?$value;
say Bool($value);
say $value.Bool;
say so $value;
say $value.so;


my Int $int-zero = 0;
say ?$int-zero; # False

my Rat $rat-zero = 0.0;
say ?$rat-zero; # False

my Num $num-zero = 0e0;
say ?$num-zero; # False

my $int = 0;
say ?(-$int); # False
