---
title: 'Soluzione: Mascherate le cifre'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $orig = 'PIN 1234';
say S:g/\d/#/ given $orig;
say $orig;
```

🦋 Trova il programma nel file [mask-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/mask-digits.raku).

## Output

```
PIN ####
PIN 1234
```

## Commenti

1. Il maiuscolo `S///` fa lo stesso lavoro di `s///` ma **restituisce una nuova stringa** invece di cambiare la variabile sul posto. Con `:g` rimpiazza ogni cifra `\d` con un `#` nella copia restituita. Viene applicato a `$orig` con `given`, che imposta la stringa come argomento corrente.

1. Stampare `$orig` dopo mostra che contiene ancora `PIN 1234`: a differenza di `s///`, l'originale è rimasto intatto.

{% include nav.html %}
