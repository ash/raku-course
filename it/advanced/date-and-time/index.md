---
title: Data e ora
---

{% include menu.html %}

Raku dispone di tipi predefiniti per lavorare con le date del calendario e gli orari. Una data è rappresentata dal tipo `Date`. Si crea fornendo l'anno, il mese e il giorno:

```raku
my $d = Date.new(2026, 6, 27);
say $d; # 2026-06-27
```

Una volta ottenuta una data, è possibile leggerne le singole parti:

```raku
my $d = Date.new(2026, 6, 27);
say $d.year;  # 2026
say $d.month; # 6
say $d.day;   # 27
```

Il metodo `day-of-week` restituisce il giorno della settimana in cui cade la data, numerato da `1` per il lunedì a `7` per la domenica:

```raku
say Date.new(2026, 6, 27).day-of-week; # 6
```

Il 27 giugno 2026 è un sabato, quindi il risultato è `6`.

Il metodo `is-leap-year` indica se la data si trova in un anno bisestile:

```raku
say Date.new(2024, 1, 1).is-leap-year; # True
say Date.new(2026, 1, 1).is-leap-year; # False
```

Per ottenere la data odierna, si chiama `Date.today`. Non ne mostriamo l'output qui, perché dipende dal giorno in cui si esegue il programma.

{% include nav.html %}
