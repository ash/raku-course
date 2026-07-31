---
title: start e await
translations_gpt:
---

{% include menu.html %}

La parola chiave `start` esegue un blocco in secondo piano e restituisce subito una `Promise`:

```raku
my $p = start { 2 + 2 };
```

Il lavoro avviene sul pool di thread di Raku mentre il tuo programma prosegue. Per ottenere il risultato usa `await`, che aspetta che la promise finisca e ti dà il suo valore:

```raku
my $p = start { 2 + 2 };
say await $p; # 4
```

`await` blocca giusto il tempo che la promise si completi, poi restituisce ciò che il blocco ha prodotto — qui `4`. Se il lavoro è già finito quando la attendi, ottieni il risultato all'istante.

Questa coppia — `start` per lanciare, `await` per raccogliere — è il cuore della concorrenza basata sulle promise. Puoi lanciare parecchi pezzi di lavoro, lasciarli girare nello stesso momento e attenderne i risultati quando sei pronto, che è esattamente ciò su cui costruisce l'argomento successivo.

{% include nav.html %}
