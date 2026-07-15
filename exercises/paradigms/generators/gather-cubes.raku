my @cubes = gather {
    take $_ ** 3 for 1..4;
}

say @cubes;
