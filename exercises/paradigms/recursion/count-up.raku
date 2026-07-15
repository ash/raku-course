sub countup($n) {
    return if $n < 1;
    countup($n - 1);
    say $n;
}

countup(3);
