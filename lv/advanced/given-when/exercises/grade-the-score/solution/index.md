---
title: 'Risinājums: Dzīves posms pēc vecuma'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
my $age = 30;

given $age {
    when $_ < 0 { say 'invalid' }
    when 0..12  { say 'child' }
    when 13..19 { say 'teenager' }
    when 20..64 { say 'adult' }
    default     { say 'senior' }
}
```

🦋 Jūs varat atrast pirmkodu failā [grade-the-score.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/grade-the-score.raku).

## Izvade

```
adult
```

## Komentāri

1. Šis risinājums apvieno divus `when` veidus. Pirmais ir *nosacījums*, `$_ < 0` (kur `$_` ir tēma, ko nosaka `given`), kas izfiltrē nederīgos vecumus; pārējie ir *diapazoni*, kas grupē derīgos vecumus pa posmiem.

1. Secība ir svarīga. Negatīvā vecuma aizsargs ir pirmais, tāpēc tas tiek izpildīts pirms jebkura diapazona pārbaudes. Vērtība `30` ietilpst `20..64`, tāpēc programma izdrukā `adult`.

1. `default` bloks aptver visus vecumus no 65 un vairāk, kurus neaptver neviens no norādītajiem diapazoniem.

Jūs varat to apgriezt otrādi un ļaut `default` uztvert *nederīgo* ievadi. Uzskaitiet visus atpazītos posmus — ieskaitot `senior` kā nosacījumu `$_ >= 65` — un uzskatiet visu atlikušo (piemēram, negatīvu vecumu) par nederīgu:

```raku
given $age {
    when 0..12    { say 'child' }
    when 13..19   { say 'teenager' }
    when 20..64   { say 'adult' }
    when $_ >= 65 { say 'senior' }
    default       { say 'invalid' }
}
```

Šeit `default` ir patiess "nekas no iepriekšminētā" atzars. Kura versija ir lasāmāka, ir gaumes jautājums: novietojiet aizsargu pirmajā vietā, ja nederīgais gadījums ir izņēmums, vai padariet to par rezerves variantu, ja derīgie posmi ir skaidri uzskaitīti.

{% include nav.html %}
