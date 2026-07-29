---
title: 'Solution: Таблица за покупки'
---

{% include menu.html %}

Таблицата съдържа заглавие (което просто отпечатвате с един `say`) и редица редове със сходна структура: име на артикул, цена на артикул, количество и обща стойност на тези артикули.

Тъй като искате да запазите реда на редовете, масив е добър избор за съхраняване на артикулите. Така че, всеки ред от таблицата съответства на един елемент от масива.

На второ ниво, запис може да бъде съхранен в хеш структура с няколко именувани полета: `name`, `price` и `quantity`.

Останалата част от програмата е да обхождате артикулите, изчислявате общите стойности и отпечатвате редовете на таблицата.

## Код

Ето едно от възможните решения на тази задача:

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

🦋 Намерете програмата във файла [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/purchase-table.raku).

## Изход

```console
$ raku exercises/associatives/purchase-table.raku
Item	Price	N	Total
Chairs	$20.57	4	$82.28
Tables	$50.18	1	$50.18
```

{% include nav.html %}