---
title: 'Solution: Leggere la costante'
translations_gpt: La soluzione di 'Leggere la costante'
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

Il programma, `read-pi.raku`:

```raku
need Circle;

say $Circle::pi;
```

🦋 Puoi trovare entrambi i file sorgente nella directory [exercises/advanced/modules-basics/read-the-constant](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/read-the-constant).

## Output

```console
$ raku -I. read-pi.raku
3.14
```

## Commenti

1. `need Circle` carica il modulo ma non importa alcun nome, quindi un semplice `$pi` non verrebbe riconosciuto.

1. La variabile `our` si raggiunge attraverso il nome del modulo, scritto come `$Circle::pi`.

{% include nav.html %}
