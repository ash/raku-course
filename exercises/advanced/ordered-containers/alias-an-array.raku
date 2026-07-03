my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
