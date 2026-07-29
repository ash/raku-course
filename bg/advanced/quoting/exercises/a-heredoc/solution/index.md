---
title: 'Solution: Heredoc'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 Можете да намерите изходния код във файла [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Изход

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Коментари

1. Heredoc-ът започва с `qq:to` вместо `q:to`, така че интерполира. Подобно на низ с `qq`, той попълва скаларите — `$name`, `$count`, `$item` — *и* изпълнява вграден код: блокът `{$count * $price}` изчислява `3 * 25`, така че общата сума `75` се появява директно.

1. Двойните кавички около `"$item"` тук са просто буквални символи; вътре в heredoc няма разделител, който да се екранира, така че те се отпечатват както са написани, докато `$item` все пак се интерполира.

1. Тялото и затварящият `END` са отместени с еднакви четири интервала. Отстъпът на терминатора се премахва от всеки ред, така че тези четири интервала никога не достигат до низа — изходът започва от левия край.

1. Heredoc-ът вече завършва с нов ред, така че се използва `print` вместо `say`, за да се избегне добавянето на втори празен ред.

{% include nav.html %}
