---
title: 'Solvo: Sumi ĉiujn argumentojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub total(*@nums) {
    [+] @nums
}

say total(3, 5, 7);
```

🦋 Vi povas trovi la fontkodon en la dosiero [sum-all-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/sum-all-arguments.raku).

## Eligo

```
15
```

## Komentoj

1. La engluta parametro `*@nums` kolektas ĉiujn argumentojn en la tabelon `@nums`, kiom ajn da ili estas.

1. La redukta metaoperatoro `[+]` poste adicias ilin ĉiujn, donante `15`.

{% include nav.html %}
