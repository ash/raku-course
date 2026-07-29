---
title: Розв'язання вправи «Бали з рядків CSV»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Вивід

```
average: 82
above average:
  Anna
  Cara
```

## Коментарі

1. Розбиття кожного рядка на комі й присвоєння в `($name, $mark)` розпаковує два
поля одразу; `.Int` перетворює текст бала на число.

1. Середнє є сумою значень, поділеною на їхню кількість; перелічують кожного, чий
бал його перевищує. Тут середнє виходить цілим `82`.

1. Той останній цикл можна записати конвеєром. `sort` упорядковує пари, `grep`
залишає ті, що вищі за середнє, а `map` зводить кожну вцілілу пару до її імені, —
тож у тілі циклу не лишається жодної логіки, лише друк:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    Читаючи зліва направо, це каже рівно те, що робить: відсортуй, залиш тих, хто
вищий за середнє, візьми їхні імена. Кожен етап є невеликим самодостатнім кроком,
а `*.value` / `*.key` є [зірочками Whatever](/uk/advanced/whatever), що на льоту
будують блок від одного аргументу.

{% include nav.html %}
