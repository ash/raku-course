---
title: '"for" loop'
---

{% include menu.html %}

La `for` buklo estas potenca ilo por iteri super multoblaj elementoj. Ekzemple, ni prenu intervalon:

```raku
for 1..5 -> $n {
    say $n;
}
```

En ĉi tiu programo, la variablo `$n` prenas la sekvan valoron el la intervalo en ĉiu iteracio. Rimarku, ke vi ne devas eksplicite deklari la variablon per `my`. La bloko de kodo ripetiĝas tiom da fojoj kiom estas elementoj en la datumfonto. Do, la programo presas la nombrojn linio post linio:

```console
$ raku t.raku 
1
2
3
4
5
```

La programo iteras super ĉiuj valoroj, kiujn la [intervalo](/eo/essentials/ranges) `1..5` generas. Ĉi tiuj estas `1`, `2`, `3`, `4`, kaj `5`.

## Preni pli ol unu valoron

Interesa trajto de Raku estas, ke vi povas preni pli ol unu elementon en unu sola iteracio. La sekva programo presas du nombrojn en buklo:

```raku
for 1..6 -> $n, $m {
    say "$n and $m";
}
```

La eligo de ĉi tiu programo estas la sekva:

```console
$ raku t.raku
1 and 2
3 and 4
5 and 6
```

{% include nav.html %}