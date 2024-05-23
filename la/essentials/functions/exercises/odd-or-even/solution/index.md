---
title: 'Solutio: Impare vel Pare'
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

🦋 Inveni programmatum in archivo [odd-or-even.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/odd-or-even.raku).

## Output

```console
$ raku exercises/functions/odd-or-even.raku
Even
Odd
Even
Odd
```

{% include nav.html %}