---
title: 'Solutio: Functio ad computandum xʸ'
---

{% include menu.html %}

In hoc programmate, utere operatore `**` ad potentiam computandam.

## Codex

Hic est solutio:

```raku
sub f($x, $y) { $x ** $y }

say f(5, 3);
say f(2, 10);
say f(-4, 5);
```

🦋 Inveni programma in fasciculo [function-x-to-the-power-of-y.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/function-x-to-the-power-of-y.raku).

## Output

Curre programma ut confirmes illud responsa correcta imprimere:

```console
$ raku exercises/functions/function-x-to-the-power-of-y.raku
125
1024
-1024
```

## Commentarius

Haec functio etiam operatur cum potentiis negativis, exempli gratia:

```raku
say f(5, -1);  # 0.2
say f(10, -2); # 0.01
```

{% include nav.html %}