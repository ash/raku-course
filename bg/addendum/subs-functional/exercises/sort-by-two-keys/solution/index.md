---
title: 'Решение: Сортиране по два ключа'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Изход

```
Bob (25)
Anna (30)
Cara (30)
```

## Коментари

1. Когато блокът на `.sort` върне списък, Raku сравнява по първия елемент, после по
втория — така че `{ .<age>, .<name> }` сортира първо по възраст и използва името само
за разрешаване на равенствата.

1. Anna и Cara имат еднаква възраст `30`, така че са подредени по азбучен ред; Bob,
бидейки по-млад, идва пръв.

{% include nav.html %}
