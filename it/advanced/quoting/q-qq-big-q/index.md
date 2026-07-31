---
title: q, qq e Q
---

{% include menu.html %}

Ci sono tre operatori di quoting base, che differiscono per quanto elaborano il testo al loro interno:

* `q` — come le virgolette singole: quasi tutto è letterale
* `qq` — come le virgolette doppie: variabili e sequenze di escape vengono interpolate
* `Q` — il più letterale di tutti: **nulla** viene elaborato

Ognuno prende il testo tra una coppia di delimitatori. Il familiare `'…'` è un'abbreviazione per `q`, e `"…"` è un'abbreviazione per `qq`:

```raku
my $name = 'Anna';

say q{Hello $name};  # Hello $name
say qq{Hello $name}; # Hello Anna
```

`q` lascia `$name` invariato; `qq` lo interpola. Le sequenze di escape con backslash come `\n` si comportano allo stesso modo: solo `qq` (e `"…"`) trasforma `\n` in un vero carattere di nuova riga, mentre sia `q` che `Q` lo lasciano come i due caratteri `\` e `n`:

```raku
say qq{line\nbreak}; # line<newline>break
say q{line\nbreak};  # line\nbreak
say Q{line\nbreak};  # line\nbreak
```

Quindi dove differiscono `q` e `Q`? `q`, come le virgolette singole, gestisce ancora un *piccolo* insieme di escape — un doppio backslash `\\` diventa uno solo, e puoi fare l'escape del delimitatore di chiusura — mentre la forma `Q` pura non elabora **nulla** affatto:

```raku
say q{a\\b}; # a\b   — q collapses the escaped backslash
say Q{a\\b}; # a\\b  — Q keeps both characters
```

Puoi scegliere qualsiasi delimitatore — `q{…}`, `q[…]`, `q/…/`, `q!…!` — il che è comodo quando il testo stesso contiene virgolette. I tre operatori sono la base; l'argomento successivo mostra come gli [_avverbi_](/it/advanced/quoting/adverbs) ti permettono di combinare esattamente quali funzionalità sono attive.

{% include nav.html %}
