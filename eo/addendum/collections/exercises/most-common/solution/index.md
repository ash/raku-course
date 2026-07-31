---
title: 'Solvo: La plej ofta elemento'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @values = <a b a c a b>;

my %count;
%count{$_}++ for @values;

say %count.sort(-*.value)[0].key;
```

🦋 Vi povas trovi la fontkodon en la dosiero [most-common.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/most-common.raku).

## Eligo

```
a
```

## Komentoj

1. Post nombri ĉiun valoron en `%count`, ordigi la parojn laŭ `-*.value` metas la
plej oftan unue; `[0].key` poste redonas tiun elementon.

1. Raku povas fari la nombradon por vi per [`Bag`](/eo/advanced/sets-bags-mixes),
kiu kalkulas, kiom da fojoj ĉiu valoro aperas. Poste `.max(*.value)` elektas la
paron kun la plej alta nombro, kaj `.key` estas la elemento mem:

    ```raku
    my @values = <a b a c a b>;

    say @values.Bag.max(*.value).key; # a
    ```

    La tuta nombrado estas unu sola metodvoko, kaj estas neniu eksplicita haketmapo
    administrenda.

{% include nav.html %}
