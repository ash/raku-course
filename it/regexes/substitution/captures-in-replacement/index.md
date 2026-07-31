---
title: Catture nel rimpiazzo
translations_gpt:
---

{% include menu.html %}

La parte di rimpiazzo di `s///` può riferirsi alle catture fatte dallo schema. Questo ti permette di riordinare il testo riconosciuto invece di limitarti a buttarlo via.

Per esempio, trasforma una data scritta come `anno-mese` in `mese/anno` catturando entrambi i numeri e rimettendoli nell'ordine opposto:

```raku
my $d = '2025-06';
$d ~~ s/ (\d+) '-' (\d+) /$1\/$0/;
say $d; # 06/2025
```

Lo schema cattura l'anno in `$0` e il mese in `$1`. Nel rimpiazzo, `$1` e `$0` sono scritti nell'ordine invertito, con una barra fra di essi. (La barra è protetta come `\/` così da non essere scambiata per la fine della sostituzione.) Nota che gli spazi sono insignificanti dal lato dello **schema** ma letterali dal lato del **rimpiazzo**, quindi il rimpiazzo si scrive senza spazi attorno.

Le catture con nome funzionano allo stesso modo. Questo fa leggere chiaramente una sostituzione anche quando i pezzi sono parecchi:

```raku
my $name = 'Doe, Jane';
$name ~~ s/ $<last>=(\w+) ', ' $<first>=(\w+) /$<first> $<last>/;
say $name; # Jane Doe
```

{% include nav.html %}
