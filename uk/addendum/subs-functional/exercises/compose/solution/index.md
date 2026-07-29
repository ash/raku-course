---
title: Розв'язання вправи «Скомпонуйте дві функції»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 Знайдіть програму у файлі [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Вивід

```
12
```

## Коментарі

1. Параметри `&f` та `&g` приймають будь-що викличне — тут це функції з Whatever
`* * 2` та `* + 1`.

1. `compose` повертає свіжу анонімну функцію `-> $x { f(g($x)) }`. Виклик її на
`5` спершу запускає `g` (`5 + 1`), потім `f` (`6 * 2`), даючи `12`.

{% include nav.html %}
