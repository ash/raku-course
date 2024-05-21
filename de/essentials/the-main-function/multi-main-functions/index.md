---
title: Mehrere MAIN-Funktionen
---

{% include menu.html %}

Wie jede andere Funktion in Raku kann auch die `MAIN`-Funktion ihre `multi`-Varianten haben. Dies ermöglicht es dem Programm, individuell auf eine unterschiedliche Anzahl oder verschiedene Typen von Eingabeparametern zu reagieren.

```raku
multi sub MAIN($a) {
    say 2 * $a;
}

multi sub MAIN($a, $b) {
    say $a + $b;
}
```

Dieses Programm verdoppelt sein einziges Argument oder addiert es zum zweiten Argument, falls dieses vorhanden ist:

```console
$ raku t.raku 21
42

$ raku t.raku 21 33
54
```

{% include nav.html %}