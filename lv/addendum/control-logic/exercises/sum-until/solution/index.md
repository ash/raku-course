---
title: 'Risinājums: Summējiet, līdz pārsniedz simtu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $sum = 0;
my $n   = 0;

loop {
    $n++;
    $sum += $n;
    last if $sum > 100;
}

say "reached $sum after adding 1..$n";
```

🦋 Atrodiet programmu failā [sum-until.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/sum-until.raku).

## Izvade

```
reached 105 after adding 1..14
```

## Komentāri

1. Kails `loop { }` atkārtojas mūžīgi; to izbeidz `last if $sum > 100`, tiklīdz
summa pārkāpj slieksni.

1. `1 + 2 + … + 14` ir `105`, pirmā daļsumma virs `100`, tāpēc cikls apstājas ar
`$n` pie `14`.

1. Šo summu var pārbaudīt ar [redukciju](/lv/advanced/metaoperators/reduction):

    ```raku
    say [+] 1..14; # 105
    ```

{% include nav.html %}
