---
title: 'Solution: Таблиця покупок'
---

{% include menu.html %}

Таблиця містить заголовок (який ви просто виводите за допомогою одного `say`) і кілька рядків зі схожою структурою: назва товару, ціна товару, кількість і загальна вартість цих товарів.

Оскільки ви хочете зберегти порядок рядків, масив є хорошим вибором для зберігання товарів. Отже, кожен рядок таблиці відповідає одному елементу масиву.

На другому рівні запис можна зберегти в структурі хешу з кількома іменованими полями: `name`, `price` і `quantity`.

Решта програми полягає в тому, щоб пройтися по товарах, обчислити загальну вартість і вивести рядки таблиці.

## Код

Ось одне з можливих рішень цього завдання:

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

🦋 Знайдіть програму у файлі [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/purchase-table.raku).

## Вивід

```console
$ raku exercises/associatives/purchase-table.raku
Item	Price	N	Total
Chairs	$20.57	4	$82.28
Tables	$50.18	1	$50.18
```

{% include nav.html %}