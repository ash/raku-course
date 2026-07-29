---
title: 'Решение: Точки от редове CSV'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @lines = 'Anna,90', 'Bob,72', 'Cara,84';
my %score;

for @lines -> $line {
    my ($name, $mark) = $line.split(',');
    %score{$name} = $mark.Int;
}

my $average = ([+] %score.values) / %score.elems;
say "average: $average";

say "above average:";
for %score.sort -> $pair {
    say "  {$pair.key}" if $pair.value > $average;
}
```

🦋 Намерете програмата във файла [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Изход

```
average: 82
above average:
  Anna
  Cara
```

## Коментари

1. Разделянето на всеки ред по запетаята и присвояването на `($name, $mark)` разопакова
двете полета наведнъж; `.Int` превръща текста на точките в число.

1. Средното е сумата на стойностите, разделена на броя им; изреждат се всички, чиито
точки го надминават. Тук средното излиза цялото `82`.

1. Онзи последен цикъл може да се запише като конвейер. `sort` подрежда двойките, `grep`
запазва онези над средното, а `map` свежда всяка оцеляла двойка до името ѝ — така в
тялото на цикъла не остава логика, а само печатане:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    Четейки отляво надясно, това казва точно каквото прави: сортирай, запази онези над
средното, вземи имената им. Всеки етап е малка самостоятелна стъпка, а `*.value` /
`*.key` са [звезди Whatever](/bg/advanced/whatever), които в движение изграждат блок от
един аргумент.

{% include nav.html %}
