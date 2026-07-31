---
title: 'Solutio: Summa per pull-one'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $it = (3, 7, 5).iterator;
my $sum = 0;

loop {
    my $v := $it.pull-one;
    last if $v =:= IterationEnd;
    $sum += $v;
}

say $sum;
```

🦋 Inveni codicem fontem in archivo [sum-with-pull-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/iterators/sum-with-pull-one.raku).

## Exitus

```
15
```

## Commentarii

1. `.iterator` visum indicis in extractione fundatum dat, et unumquodque `pull-one` numerum sequentem reddit.

1. Valor per `:=` **ligatur**, non assignatur, ut `$v =:= IterationEnd` finem recte deprehendat — assignatio `=` receptaculum loco valoris compararet. Anulus `3`, `7` et `5` addit, deinde `IterationEnd` invenit et consistit, `15` relinquens.

{% include nav.html %}
