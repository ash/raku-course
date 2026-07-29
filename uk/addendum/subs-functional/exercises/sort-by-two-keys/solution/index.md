---
title: Розв'язання вправи «Сортування за двома ключами»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @people =
    { name => 'Anna', age => 30 },
    { name => 'Bob',  age => 25 },
    { name => 'Cara', age => 30 };

for @people.sort({ .<age>, .<name> }) -> %person {
    say "%person<name> (%person<age>)";
}
```

🦋 Знайдіть програму у файлі [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Вивід

```
Bob (25)
Anna (30)
Cara (30)
```

## Коментарі

1. Коли блок `.sort` повертає список, Raku порівнює за першим елементом, потім за
другим, — тож `{ .<age>, .<name> }` сортує спершу за віком і використовує ім'я
лише для розведення нічиїх.

1. Anna та Cara мають однаковий вік `30`, тож їх упорядковано за абеткою; Bob,
бувши молодшим, іде першим.

{% include nav.html %}
