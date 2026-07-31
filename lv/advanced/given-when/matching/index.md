---
title: Diapazonu, tipu un nosacījumu salīdzināšana
translations_gpt:
---

{% include menu.html %}

`when` bloks ne tikai salīdzina vienlīdzību. Tas veic _gudro salīdzināšanu_ (smart match) starp tēmu un norādīto vērtību, tāpēc jūs varat salīdzināt ar diapazoniem, tipiem un nosacījumiem, ne tikai ar atsevišķām vērtībām.

## Diapazoni

Diapazons atbilst, ja tēma ietilpst tajā. Tas padara `given`/`when` par dabisku risinājumu skaitļu grupēšanai joslās:

```raku
my $score = 75;

given $score {
    when 90..100 { say 'A' }
    when 80..89  { say 'B' }
    when 70..79  { say 'C' }
    default      { say 'F' }
}
```

Vērtība `75` ietilpst diapazonā `70..79`, tāpēc programma izdrukā:

```
C
```

## Tipi

Tips atbilst, ja tēma ir šī tipa. Tas ļauj jums sazaroties atkarībā no tā, kāda veida vērtība jums ir:

```raku
my $value = 'Raku';

given $value {
    when Int { say 'an integer' }
    when Str { say 'a string' }
}
```

Tā kā `$value` satur virkni, programma izdrukā:

```
a string
```

## Nosacījumi

Jūs varat arī tieši izmantot salīdzinājumu. `when` iekšienē tēma ir pieejama kā `$_`, tāpēc nosacījums, piemēram, `$_ < 0`, atbilst, ja tas ir patiess:

```raku
my $n = -7;

given $n {
    when $_ < 0 { say 'negative' }
    when 0      { say 'zero' }
    default     { say 'positive' }
}
```

Šeit pirmais `when` atbilst, un programma izdrukā:

```
negative
```

{% include nav.html %}
