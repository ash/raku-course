---
title: Uzante ripeti
---

{% include menu.html %}

La `while` kaj `until` blokoj eble neniam estos ekzekutitaj se la kondiĉo estas komence `False`. Kontraste, la `repeat` bloko ĉiam estas ekzekutita almenaŭ unufoje. La haltokondiĉo estas kontrolita post la koda bloko. Vi uzas la samajn vortojn `while` aŭ `until` por la testo.

Konsideru ĉi tiun programon.

```raku
my $x = 100;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} while $x <= 10;
say "$x is bigger than 10.";
```

La variablo `$x` estas komence agordita al `100`, kaj la `while` kondiĉo kontrolas ĉu `$x` estas malpli ol aŭ egala al `10`. Kun la donita valoro de la variablo, la kondiĉo jam estas `False`, sed la koda bloko estas ankoraŭ unue ekzekutita.

```console
$ raku t.raku
Enter a number: 10
You entered 10.
Enter a number: 20
You entered 20.
20 is bigger than 10.
```

Ni modifu la programon por uzi `until` anstataŭe.

```raku
my $x = 0;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} until $x > 10;
say "$x is bigger than 10.";
```

Rulu ĝin por konfirmi ke ĝi funkcias kiel atendite:

```console
$ raku t.raku
Enter a number: 5
You entered 5.
Enter a number: 15
You entered 15.
15 is bigger than 10.
```

{% include nav.html %}