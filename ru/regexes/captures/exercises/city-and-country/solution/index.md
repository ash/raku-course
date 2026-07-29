---
title: 'Решение: Город и страна'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 Исходный код можно найти в файле [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Вывод

```
London
UK
```

## Комментарии

1. `$<city>=( … )` и `$<country>=( … )` дают двум захватам имена вместо номеров.

1. После сопоставления их читают обратно как `$<city>` и `$<country>`, а это понятнее, чем `$0`
и `$1`.

1. Префикс `~` переводит каждый захват в строковый контекст, чтобы он печатался как обычный
текст; без него `say $<city>` показал бы объект совпадения как `｢London｣`.

{% include nav.html %}
