---
title: 'Soluzione: Due thread'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my ($x, $y);
my $a = Thread.start({ $x = 10 * 10 });
my $b = Thread.start({ $y = 20 * 20 });
$a.finish;
$b.finish;
say $x + $y;
```

🦋 Trova il programma nel file [two-threads.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/two-threads.raku).

## Output

```
500
```

## Commenti

1. I due thread girano in modo concorrente, ciascuno scrivendo il proprio risultato nella propria variabile condivisa.

1. La lettura di `$x` e `$y` avviene solo **dopo** entrambe le chiamate a `.finish`, quindi i risultati sono con certezza pronti: `100 + 400` fa `500`. È unire prima di leggere a rendere affidabile il valore.

{% include nav.html %}
