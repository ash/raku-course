---
title: 'Soluzione: Attendete una promise'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 Trova il programma nel file [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Output

```
(slow quick medium)
```

## Commenti

1. Tutti e tre i lavori partono insieme e dormono in modo concorrente, quindi l'intero programma impiega circa `0.3` secondi — la durata del lavoro più lento, non la somma di tutti e tre.

1. Anche se `quick` finisce per primo e `slow` per ultimo, l'output è `(slow quick medium)`: `await` restituisce ogni risultato nella stessa posizione della propria promise in `@jobs`. L'ordine di completamento influenza solo *quando* `await` ritorna, mai la disposizione dei risultati.

{% include nav.html %}
