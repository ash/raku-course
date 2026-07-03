my @result = gather for 1..4 -> $n {
    take $n for 1..$n;
};

say @result;
