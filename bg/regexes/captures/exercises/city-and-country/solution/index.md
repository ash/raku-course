---
title: 'Решение: Град и държава'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 Намерете програмата във файла [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Изход

```
London
UK
```

## Коментари

1. `$<city>=( … )` и `$<country>=( … )` дават на двете прихващания имена вместо номера.

1. След съпоставянето до тях се стига като `$<city>` и `$<country>`, което се чете по-ясно, отколкото биха се чели `$0` и `$1`.

1. Префиксът `~` поставя всяко прихващане в низов контекст, така че то се отпечатва като обикновен текст; без него `say $<city>` би показал обекта на съвпадението като `｢London｣`.

{% include nav.html %}
