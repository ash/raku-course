---
title: Inizio e fine della stringa
translations_gpt:
---

{% include menu.html %}

Due ancore segnano le estremità della stringa:

* `^` corrisponde proprio all'**inizio** della stringa
* `$` corrisponde proprio alla **fine**

Usa `^` per richiedere che la corrispondenza cominci dall'inizio:

```raku
say so 'http://example' ~~ /^ http /; # True
say so 'see http://x'   ~~ /^ http /; # False
```

La seconda stringa contiene `http`, ma non all'inizio, quindi lo schema ancorato fallisce.

Mettere `^` e `$` attorno a uno schema lo costringe a riconoscere l'**intera** stringa, senza che avanzi nulla da nessuna delle due parti:

```raku
say so 'hello'       ~~ /^ hello $/; # True
say so 'hello world' ~~ /^ hello $/; # False
```

È un modo di dire molto comune per la validazione — «questa stringa è esattamente un numero?», per esempio:

```raku
say so '2025' ~~ /^ \d+ $/; # True
say so '20a5' ~~ /^ \d+ $/; # False
```

## Ancore di riga

Quando una stringa ha più righe, le compagne `^^` e `$$` corrispondono all'inizio e alla fine di **ogni riga** invece che dell'intera stringa. La differenza rispetto a `^` e `$` salta fuori non appena il testo che vuoi non è sulla prima riga: le ancore singole vedono solo l'intera stringa e falliscono, mentre quelle doppie corrispondono su qualunque riga.

```raku
say so "cat\ndog" ~~ /^  dog  $/;  # False
say so "cat\ndog" ~~ /^^ dog $$/;  # True
```

Qui `\n` inizia una seconda riga. `^^` richiede che `dog` stia all'inizio di una riga e `$$` alla fine di una; entrambe le cose valgono sulla seconda riga, quindi le ancore doppie riescono dove quelle singole non possono.

{% include nav.html %}
