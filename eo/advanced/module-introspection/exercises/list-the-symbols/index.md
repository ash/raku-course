---
title: Listigi la simbolojn
translations_gpt:
---

{% include menu.html %}

## Problemo

Vi ricevas modulon en dosiero `Circle.rakumod`, kiu difinas du `our`-variablojn:

```raku
unit module Circle;

our $pi = 3.14;
our $tau = 6.28;
```

Skribu programon, kiu uzas la modulon kaj presas, unue, kiom da nomoj estas difinitaj en la pakaĵo de la modulo, kaj poste la nomojn mem en alfabeta ordo.

## Ekzemplo

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
