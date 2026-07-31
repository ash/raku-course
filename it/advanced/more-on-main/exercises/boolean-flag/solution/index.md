---
title: 'Solution: Un flag da riga di comando'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione per questo esercizio.

## Codice

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 Puoi trovare il codice sorgente nel file [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku).

## Output

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Commenti

1. Un parametro con nome di tipo `Bool` diventa un flag: passare `--shout` imposta `$shout` a `True`, mentre ometterlo lascia il valore predefinito `False`.

1. L'operatore ternario stampa quindi `HELLO` o `hello` di conseguenza. A differenza di un'opzione `--nome=valore`, un flag non accetta un valore: e la sua semplice presenza a contare.

{% include nav.html %}
