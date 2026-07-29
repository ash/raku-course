---
title: 'Solution: Дължина на име'
---

{% include menu.html %}

## Код

Ето решението на задачата:

```raku
my $name = prompt 'What is your name? ';
say $name.chars;
```

🦋 Можете да намерите изходния код във файла [name-length.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/name-length.raku).

## Изход

Стартирайте програмата и въведете име.

```console
$ raku exercises/strings/name-length.raku 
What is your name? Alexandra
9
```

## Коментари

В тази програма получаваме дължината на низа, като извикваме метода `chars` върху променливата `$name`. Тъй като променливата съдържа низ, методът връща неговата дължина.

{% include nav.html %}