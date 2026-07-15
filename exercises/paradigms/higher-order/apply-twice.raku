sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
