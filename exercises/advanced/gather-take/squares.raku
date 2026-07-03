my @squares = gather for 1..6 {
    take $_ ** 2 if $_ %% 2;
};

say @squares;
