---
title: 'Risinājums: Gramatika, kas saskaita'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Sum {
    token TOP    { <number>+ % '+' }
    token number { \d+ }
}

class SumActions {
    method TOP($/) { make [+] $<number>.map(*.Int) }
}

say Sum.parse('3+4+5', actions => SumActions).made;
```

🦋 Atrodiet programmu failā [grammar-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/grammar-sum.raku).

## Izvade

```
12
```

## Komentāri

1. `<number>+ % '+'` salāgo vienu vai vairākus skaitļus, atdalītus ar `+` zīmēm —
modifikators `%` apraksta atdalītāju starp atkārtojumiem.

1. Darbības metode izpildās, kad `TOP` salāgojas. `make` piesaista aprēķinātu
vērtību — skaitļu summu —, ko pēc parsēšanas nolasa `.made`.

1. `token` nekad neizlaiž atstarpes, tāpēc šī gramatika pret savu ievadi ir stingra:
`'3+4+5'` parsējas, bet `'3 + 4 + 5'` nē (`.parse` atgriež `Nil`). Lai pieņemtu
atstarpes ap plusa zīmēm, padariet `TOP` par `rule` — un atdaliet kvantoru
no tā atoma:

    ```raku
    grammar Sum {
        rule TOP     { <number> + % '+' }
        token number { \d+ }
    }
    ```

    `rule` iekšienē atstarpe paraugā apzīmē netiešu `<.ws>` izsaukumu.
Uzrakstīts kā `<number> + % '+'`, ar atstarpi pirms kvantora `+`, šī
netiešā atstarpe nosedz visu atkārtojumu — arī atdalītājus —, tāpēc tiek parsēts gan
`'3+4+5'`, gan `'3 + 4 + 5'`, un summa abos gadījumos ir `12`. (Ja labprātāk
paliekat pie `token`, izrakstiet atstarpes atdalītājā:
`<number>+ % [ \s* '+' \s* ]`.)

{% include nav.html %}
