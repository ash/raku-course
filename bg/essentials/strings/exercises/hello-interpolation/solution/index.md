---
title: 'Solution: Здравей, Интерполация!'
---

{% include menu.html %}

## Код

Ето едно възможно решение на този проблем:

```raku
my $name = prompt 'Как се казваш? ';
say "Здравей, $name!";
```

🦋 Можете да намерите изходния код във файла [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/hello-interpolation.raku).

## Изход

Стартирайте програмата и тя ще влезе в режим на изчакване за вашия вход. След като въведете името и натиснете Enter, програмата ще продължи и ще отпечата поздравлението:

```console
$ raku exercises/strings/hello-concatenation.raku
Как се казваш? Raku
Здравей, Raku!
```

## Коментари

Обърнете внимание, че този път низът е в двойни кавички. В двойни кавички променливите се интерполират, така че тяхното съдържание се поставя в низа.

{% include nav.html %}