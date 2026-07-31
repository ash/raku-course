---
title: 'Solvo: Listigi la simbolojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

La programo, `list.raku`:

```raku
use Circle;

say Circle::.keys.elems;
say Circle::.keys.sort;
```

🦋 Vi povas trovi ambaŭ fontdosierojn en la dosierujo [exercises/advanced/module-introspection/list-the-symbols](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/list-the-symbols).

## Eligo

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Komentoj

1. `Circle::` estas la pakaĵo de la modulo, kaj `.keys` listigas la nomojn, kiujn ĝi enhavas, ĉiun inkluzive de sia sigelo.

1. `.elems` kalkulas tiujn nomojn — la modulo difinas du `our`-variablojn, do la kalkulo estas `2`.

1. `.keys` ne garantias iun apartan ordon, do ni aplikas `.sort` por ricevi stabilan, alfabetan rezulton `($pi $tau)`. Sen ordigo, la du nomoj povus aperi en iu ajn ordo inter ruloj.

{% include nav.html %}
