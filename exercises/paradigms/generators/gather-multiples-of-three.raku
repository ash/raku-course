my @threes = gather {
    for 1..15 {
        take $_ if $_ %% 3;
    }
}

say @threes;
