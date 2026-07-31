---
title: 'Solution: Un MAIN tipizzato'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione per questo esercizio.

## Codice

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 Puoi trovare il codice sorgente nel file [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku).

## Output

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Commenti

1. Il vincolo `Int` significa che la parola sulla riga di comando deve essere un intero. Dato `5`, viene associato a `$n` e il corpo stampa `10`.

1. Dato `abc`, il valore non puo diventare un `Int`, quindi la firma non corrisponde. Raku non esegue il corpo, ma stampa il messaggio di utilizzo generato, offrendoti la validazione degli argomenti senza alcun controllo manuale.

{% include nav.html %}
