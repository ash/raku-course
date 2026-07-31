---
title: 'Soluzione: Una parola rovesciata'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Word {
    has $.text;

    method reversed {
        $.text.flip;
    }
}

say Word.new(text => 'Raku').reversed;
```

🦋 Trova il programma nel file [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Output

```
ukaR
```

## Commenti

1. Il metodo `reversed` raggiunge il `text` dell'oggetto attraverso il suo accessore `$.text` e vi chiama sopra il metodo incorporato `flip`, che restituisce la stringa rovesciata.

1. Il metodo è chiamato direttamente sull'oggetto `Word` appena creato. Nulla viene riscritto: `reversed` si limita a calcolare e restituire un nuovo valore a partire dall'attributo.

1. Nota che dentro la classe puoi leggere la variabile direttamente, senza passare per l'accessore:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
