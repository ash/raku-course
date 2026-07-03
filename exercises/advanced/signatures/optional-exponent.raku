sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
