---
title: 'Решение: Композирайте две функции'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 Намерете програмата във файла [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Изход

```
12
```

## Коментари

1. Параметрите `&f` и `&g` приемат всичко извикваемо — тук функциите с Whatever
`* * 2` и `* + 1`.

1. `compose` връща нова анонимна функция `-> $x { f(g($x)) }`. Извикването ѝ с
`5` първо изпълнява `g` (`5 + 1`), после `f` (`6 * 2`), което дава `12`.

{% include nav.html %}
