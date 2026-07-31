---
title: 'Solutio: Par vel impar'
---

{% include menu.html %}

Corporis functionis parva est, quod ratio valida est ut tum `return` consuetudinem tum punctum-commate in fine lineae omittamus.

## Codex

Hic est solutio:

```raku
sub f($n) {
    $n %% 2 ?? 'Even' !! 'Odd'
}

say f(10);
say f(5);
say f(0);
say f(3);
```

🦋 Inveni codicem fontem in archivo [odd-or-even.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/odd-or-even.raku).

## Exitus

```console
$ raku exercises/functions/odd-or-even.raku
Even
Odd
Even
Odd
```

{% include nav.html %}