---
title: 'Solution: Purchase table'
---

{% include menu.html %}

The table contains a header (which you simply print with a single `say`) and a number of rows with the similar structure: item name, item price, quantity and the total cost for these items.

As you want to preserve the order of rows, an array is a good choice to keep the items. So, each line of the table corresponds to a single element of an array. 

On the second level, a record can be saved in a hash strucutre with a few named fields: `name`, `price`, and `quantity`.

The rest of the program is to loop over the items, calculate the totals and print the table row.

## Code

Here is one of the possible solution of this task:

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

🦋 Find the program in the file [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/purchase-table.raku).

## Output

```console
$ raku exercises/associatives/purchase-table.raku
Item	Price	N	Total
Chairs	$20.57	4	$82.28
Tables	$50.18	1	$50.18
```

{% include nav.html %}
