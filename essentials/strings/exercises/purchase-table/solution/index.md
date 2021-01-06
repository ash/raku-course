---
title: Solution to ’Purchase table‘
---

{% include menu.html %}

## Code

Here is a possible solution:

```raku
my $chair-price = 20.57;
my $chairs = 4;
my $chairs-total = $chair-price * $chairs;

my $table-price = 50.18;
my $tables = 1;
my $tables-total = $table-price * $tables;

say "Item\tPrice\tN\tTotal";
say "Chairs\t\$$chair-price\t$chairs\t\$$chairs-total";
say "Tables\t\$$table-price\t$tables\t\$$tables-total";
```

All the numbers are hardcoded and saved in a number of variables. We are also using the multiplication operator `*` to compute the result. We’ll learn more about operators in the next sections of this course, but at this point, the construction such as `$chair-price * $chairs` should not be something that causes questions.

The three lines generating the output print the three lines of the table, including its header. Notice how the columns are separated by the tab characters `\t`. In the data rows, we also see an escaped dollar character: `\$` as well as different variables that we want to interpolate.

🦋 You can find the source code in the file [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/purchase-table.raku).

## Output

Run the program and see how it prints the table:

```
$ raku exercises/strings/purchase-table.raku
Item    Price   N      Total
Chairs  $20.57  4      $82.28
Tables  $50.18  1      $50.18
```

## Comments

Did you notice the hyphens in the names of the variables such as `$chair-price` or `$tables-total`? This is a perfectly acceptable way of naming variables in Raku.

Don’t be confused by the two adjacent dollar symbols. Raku reads them separately. For example, in the substring `\$$price`, the first dollar sign is escaped and thus represents itself, while the second one is a part of the variable name `$price`.

All the strings are quoted in double quotes to allow interpolation of the variables and the special characters.

Let us return to this task again after we get familiar with arrays.

{% include nav.html %}
