---
title: 'Solvo: Para aŭ nepara'
---

{% include menu.html %}

La korpo de la funkcio estas sufiĉe malgranda, kio estas valida kialo por preterlasi kaj la `return` rutinon kaj la punktokomon ĉe la fino de la linio.

## Kodo

Jen la solvo:

```raku
sub f($n) {
    $n %% 2 ?? 'Even' !! 'Odd'
}

say f(10);
say f(5);
say f(0);
say f(3);
```

🦋 Trovu la programon en la dosiero [odd-or-even.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/odd-or-even.raku).

## Eligo

```console
$ raku exercises/functions/odd-or-even.raku
Even
Odd
Even
Odd
```

{% include nav.html %}