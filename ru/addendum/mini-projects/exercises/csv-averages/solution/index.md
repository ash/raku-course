---
title: 'Решение: Оценки из строк CSV'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Вывод

```
average: 82
above average:
  Anna
  Cara
```

## Комментарии

1. Разбиение каждой строки по запятой и присваивание в `($name, $mark)` распаковывает оба поля
разом, а `.Int` превращает текст балла в число.

1. Среднее — это сумма значений, делённая на их количество; перечисляются все, чей балл его
превосходит. Здесь среднее оказывается целым `82`.

1. Последний цикл можно записать конвейером. `sort` упорядочивает пары, `grep` оставляет те,
что выше среднего, а `map` сводит каждую уцелевшую пару к имени, — так что в теле цикла не остаётся
логики, только печать:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    Читая слева направо, мы получаем ровно то, что происходит: отсортировать, оставить тех, кто
выше среднего, взять их имена. Каждый этап — небольшой самостоятельный шаг, а `*.value` / `*.key` —
это [звёздочки Whatever](/ru/advanced/whatever), которые на лету строят блок с одним аргументом.

{% include nav.html %}
