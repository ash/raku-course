---
title: 'Решение: Приложете два пъти'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 Намерете програмата във файла [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Изход

```
18
```

## Коментари

1. Параметърът `&f` получава подпрограма; вътрешното `f($x)` се подава на външното `f(...)`.

1. Утрояването на `2` дава `6`, а още едно утрояване дава `18`.

{% include nav.html %}
