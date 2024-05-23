---
title: Ternara operatoro
---

{% include menu.html %}

La ternara operatoro en Raku estas du-partia konstruo `??` ... `!!`. Boolea testo estas sekvata de du esprimoj, el kiuj unu estas ekzekutata depende de la rezulto de la testo.

```raku
my $shines = 'Sun';
my $day-time = $shines eq 'Sun' ?? 'day' !! 'night';
say $day-time;
```

Kun la nuna valoro de la variablo `$shines`, ĉi tiu programo presas `day`. Se vi ŝanĝas ĝin al `Moon`, la rezulto estos `night`.

Eblas ĉeni ternarajn esprimojn. Nur certigu, ke ĝi ne fariĝu tro komplika.

```raku
my $hours = 20;
my $day-time =
    $hours <= 6 ?? 'Night' !!
    $hours <= 12 ?? 'Morning' !! 
    $hours <= 18 ?? 'Afternoon' !! 'Evening';
say $day-time;
```

Ĉi tie, depende de la valoro en `$hours`, malsama parto de la tago estos raportata.

{% include nav.html %}