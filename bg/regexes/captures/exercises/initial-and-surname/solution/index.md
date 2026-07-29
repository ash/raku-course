---
title: 'Решение: Инициал и фамилия'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 Намерете програмата във файла [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Изход

```
Smith
```

## Коментари

1. `$<initial>=(\w)` прихваща един словесен знак; `$<surname>=(\w+)` прихваща поредицата от букви след интервала.

1. Фамилията след това се прочита по име като `$<surname>`, а префиксът `~` я отпечатва като обикновен низ; без него `say $<surname>` би показал обекта на съвпадението като `｢Smith｣`.

{% include nav.html %}
