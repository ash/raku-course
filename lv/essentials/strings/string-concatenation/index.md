---
title: Rindu savienošana Raku
---

{% include menu.html %}

Ja jums ir divas rindas, jūs varat tās savienot kopā un iegūt jaunu, garāku rindu. Šo darbību sauc par rindu savienošanu. Raku valodā jūs savienojat rindas, izmantojot—uzminiet, ko?—savienošanas operatoru. Šis operators ir tildes zīme: `~`. Lai savienotu divas rindas, ievietojiet `~` starp tām:

```raku
say 'Hello, ' ~ 'World!';
```

Ja mūsu rindas tiek glabātas mainīgajos, mēs varam 'savienot mainīgos', nu, patiesībā, savienot rindas, kuras šie mainīgie glabā:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';

say $greeting ~ $who;
```

Vai arī jūs varat izveidot jaunu mainīgo, izmantojot savienoto vērtību:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';
my $message = $greeting ~ $who;

say $message;
```

## Savienošana ar piešķiršanu

Kad jums ir nepieciešams atjaunināt mainīgo un pievienot tam jaunu rindu, izmantojiet šādu formu:

```raku
# Tā vietā, lai izmantotu
$str = $str ~ $another-str;

# izmantojiet:
$str ~= $another-str;
```

{% include nav.html %}