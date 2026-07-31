---
title: 'Solvo: Disdividu en du tabelojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 Vi povas trovi la fontkodon en la dosiero [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Eligo

```
[4 7]
[42 100 15]
```

## Komentoj

1. La korpo `whenever` estas ordinara kodo, do ĝi povas fari pli ol kolekti — ĉi tie ĝi **decidas**, direktante ĉiun valoron al `@big` aŭ `@small` laŭ ĝia alveno. Ene de ĉiu tabelo la valoroj konservas sian fluordon.

1. La bloko react atendas, ĝis la fluo estas finita, do ambaŭ tabeloj estas kompletaj antaŭ ol ili estas presataj.

{% include nav.html %}
