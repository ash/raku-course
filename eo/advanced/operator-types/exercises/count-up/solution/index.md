---
title: 'Solvo: Kalkuli supren'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $n = 9;

say $n++;
say $n;
```

🦋 Vi povas trovi la fontkodon en la dosiero [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/count-up.raku).

## Eligo

```
9
10
```

## Komentoj

1. `++` estas postfiksa operatoro: ĝi venas post sia operando. Uzata kiel esprimo, `$n++` donas unue la *malnovan* valoron `9` — kiun `say` presas — kaj nur poste inkrementas la variablon.

1. La dua linio montras, ke `$n` efektive fariĝis `10`. (La prefiksa formo `++$n` anstataŭe unue inkrementus kaj redonus `10`.)

{% include nav.html %}
