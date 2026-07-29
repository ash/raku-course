---
title: 'Решение: Таблица покупок'
---

{% include menu.html %}

Таблица содержит заголовок (который вы просто выводите с помощью одной команды `say`) и несколько строк с похожей структурой: название товара, цена товара, количество и общая стоимость этих товаров.

Так как вы хотите сохранить порядок строк, массив является хорошим выбором для хранения товаров. Таким образом, каждая строка таблицы соответствует одному элементу массива.

На втором уровне запись может быть сохранена в структуре хэша с несколькими именованными полями: `name`, `price` и `quantity`.

Остальная часть программы заключается в цикле по элементам, вычислении итогов и выводе строк таблицы.

## Код

Вот одно из возможных решений этой задачи:

```raku
my @items = [
    {
        name => 'Chairs',
        price => 20.57,
        quantity => 4,
    },
    {
        name => 'Tables',
        price => 50.18,
        quantity => 1,
    }
];

say "Item\tPrice\tN\tTotal";
for @items -> $item {
    my $total = $item<price> * $item<quantity>;
    say "$item<name>\t\$$item<price>\t$item<quantity>\t\$$total";
}
```

🦋 Найдите программу в файле [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/purchase-table.raku).

## Вывод

```console
$ raku exercises/associatives/purchase-table.raku
Item	Price	N	Total
Chairs	$20.57	4	$82.28
Tables	$50.18	1	$50.18
```

{% include nav.html %}