---
title: 'Risinājums: Sēriju garuma kodēšana'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $text = 'aaabbbbcc';

my $encoded = '';
for $text ~~ m:g/ (.) $0* / -> $match {
    $encoded ~= $match[0] ~ $match.chars;
}

say $encoded;
```

🦋 Atrodiet programmu failā [run-length.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/run-length.raku).

## Izvade

```
a3b4c2
```

## Komentāri

1. Paraugs `(.) $0*` satver vienu rakstzīmi un tad atbilst tik daudzām tās
kopijām, cik seko, — vienai veselai sērijai vienā atbilstībā. `m:g` savāc katru
sēriju.

1. Katrai sērijai `$match[0]` ir atkārtotais burts un `$match.chars` ir sērijas
garums, tāpēc abi kopā dod ierakstus, piemēram, `a3`.

1. Atbilstības nosaukšana ar `-> $match` nav obligāta. Bez tās katra atbilstība
kļūst par tematu `$_`, un mainīgo var atmest, izsaucot metodes tieši tam:

    ```raku
    my $text = 'aaabbbbcc';
    my $encoded = '';

    for $text ~~ m:g/ (.) $0* / {
        $encoded ~= .[0] ~ .chars;
    }

    say $encoded;
    ```

{% include nav.html %}
