---
title: 'Solutio: Imprime summam'
---

{% include menu.html %}

Hic programma consistit in unica functione `MAIN` quae accipit duos argumenta typata, utrumque ex argumentis e linea mandati constructum.

## Codex

Hic est solutio:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Invenias programma in archivo [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/print-the-sum.raku).

## Output

Tenta diversos numeros input:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

Potes etiam experiri currere programma sine argumentis vel cum argumentis diversorum generum et videre quid accidat. De his casibus tractandis loquemur in secunda parte cursus.

{% include nav.html %}