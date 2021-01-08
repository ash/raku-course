---
title: Multi MAIN functions
---

{% include menu.html %}

Like any other function in Raku, the `MAIN` function can have its `multi` variants. It allows the program to individually react to a different number or different types of input parameters.

```raku
multi sub MAIN($a) {
    say 2 * $a;
}

multi sub MAIN($a, $b) {
    say $a + $b;
}
```

This program doubles its only argument or adds it to the second argument if it is present:

```console
$ raku t.raku 21
42

$ raku t.raku 21 33
54
```

{% include nav.html %}
