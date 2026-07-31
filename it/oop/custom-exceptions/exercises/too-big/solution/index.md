---
title: 'Soluzione: Troppo grande'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class TooBig is Exception {
    has $.value;
    has $.limit;

    method message {
        "Value $.value exceeds the limit of $.limit";
    }
}

my $limit = 50;

for 30, 99, 60 -> $value {
    TooBig.new(value => $value, limit => $limit).throw if $value > $limit;
    say "Value $value is within the limit";

    CATCH {
        when TooBig {
            say .message;
            say "Try a value up to {.limit}.";
        }
    }
}
```

🦋 Trova il programma nel file [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Output

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Commenti

1. `TooBig is Exception` rende la classe un'eccezione sollevabile. Porta con sé due dati, `value` e `limit`, e il suo metodo `message` intreccia entrambi nel testo riferito.

1. `.throw` solleva l'eccezione e `when TooBig` la riconosce dal tipo. Il gestore fa più che stampare il messaggio: legge l'attributo `limit` direttamente dall'oggetto intercettato per dare un suggerimento utile. È questo il vantaggio di un'eccezione personalizzata rispetto a una semplice stringa: il gestore riceve dati strutturati su cui può agire.

1. L'eccezione viene sollevata **solo** quando `$value > $limit`. Per `30` non viene sollevata alcuna eccezione e il corpo del ciclo arriva fino al suo `say`, stampando che il valore è entro il limite. Per `99` e `60` scatta il `throw`, quindi quel `say` viene saltato e se ne occupa invece il `CATCH`. Il corpo del `for` è esso stesso il blocco che il `CATCH` sorveglia, quindi un'eccezione intercettata chiude solo l'iterazione corrente — e il ciclo passa poi semplicemente al valore successivo.

{% include nav.html %}
