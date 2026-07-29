---
title: 'Розв''язання: Місто й країна'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 Вихідний код можна знайти у файлі [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Вивід

```
London
UK
```

## Коментарі

1. `$<city>=( … )` та `$<country>=( … )` дають двом захопленням імена замість номерів.

1. Після збігу їх зчитують назад як `$<city>` та `$<country>`, що читається зрозуміліше, ніж `$0` і `$1`.

1. Префікс `~` ставить кожне захоплення в рядковий контекст, щоб воно виводилося як звичайний текст; без нього `say $<city>` показав би об'єкт збігу як `｢London｣`.

{% include nav.html %}
