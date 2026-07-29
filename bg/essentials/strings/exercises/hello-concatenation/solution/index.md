---
title: 'Solution: Здравей, Конкатенация!'
---

{% include menu.html %}

## Код

Ето едно възможно решение на този проблем:

```raku
my $name = prompt 'What is your name? ';
say 'Hello, ' ~ $name ~ '!';
```

🦋 Можете да намерите изходния код във файла [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/hello-concatenation.raku).

## Изход

Стартирайте програмата и тя ще влезе в режим, в който ще чака вашия вход. След като въведете името и натиснете Enter, програмата ще продължи и ще отпечата поздрава:

```console
$ raku exercises/strings/hello-concatenation.raku
What is your name? John
Hello, John!
```

## Коментари

Сравнете програмата с [предишния вариант](../../../../scalar-variables/exercises/greet-a-person/solution), където предадохме три низа на рутината `say`:

```raku
say 'Hello, ', $name, '!';
```

Този път трите части първо се конкатенират и след това се предават на `say` като един низ.

{% include nav.html %}