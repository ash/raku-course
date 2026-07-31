---
title: 'Solution: Sommare due argomenti'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione per questo esercizio.

## Codice

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

🦋 Puoi trovare il codice sorgente nel file [two-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/two-arguments.raku).

## Output

```console
$ raku two-arguments.raku 2 3
5
```

## Commenti

1. I due parametri posizionali ricevono le due parole dalla riga di comando.

1. Gli argomenti da riga di comando arrivano come stringhe, ma l'operatore `+` li converte in numeri, quindi `2` e `3` vengono sommati per ottenere `5`.

{% include nav.html %}
