---
title: Stringhe
---

{% include menu.html %}

Nella parte Essentials hai imparato [come costruire le stringhe](/it/essentials/strings) — concatenazione, interpolazione e lunghezza di una stringa. Le stringhe dispongono anche di un ricco insieme di metodi. Questa sezione raccoglie i piu utili. (La ricerca con le [espressioni regolari](/it/regexes) e un argomento separato e piu ampio, trattato in una parte dedicata.)

Tre metodi cambiano le maiuscole e minuscole di una stringa:

```raku
say 'raku'.uc; # RAKU  — upper case
say 'RAKU'.lc; # raku  — lower case
say 'raku'.tc; # Raku  — title case (first letter capitalised)
```

Il metodo `flip` inverte i caratteri di una stringa:

```raku
say 'Raku'.flip; # ukaR
```

E l'operatore `x` ripete una stringa un dato numero di volte:

```raku
say 'ab' x 3; # ababab
```

Gli argomenti seguenti mostrano come cercare all'interno delle stringhe e come dividerle in parti e riunirle.

{% include nav.html %}
