---
title: 'Soluzione: Un errore per i numeri negativi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Negative is Exception {
    has $.n;

    method message {
        "$.n is negative";
    }
}

sub check($n) {
    Negative.new(n => $n).throw if $n < 0;
    return $n;
}

{
    say check(-5);

    CATCH {
        when Negative {
            say .message;
        }
    }
}

Negative.new(n => -10).throw;
```

🦋 Trova il programma nel file [negative-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/negative-error.raku).

## Output

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Commenti

1. `Negative is Exception` rende la classe sollevabile, e il suo metodo `message` usa l'attributo `n` per costruire il testo.

1. `check` valida il proprio input e solleva l'eccezione personalizzata per un numero negativo. L'eccezione esce da `check` e arriva al `CATCH` nel blocco chiamante, dove `when Negative` la riconosce dal tipo e ne stampa il messaggio. Validare l'input e segnalare i valori sbagliati con un'eccezione tipizzata è un uso molto comune e concreto delle eccezioni personalizzate.

1. Le `{ … }` attorno alla chiamata ci sono perché un phaser `CATCH` gestisce le eccezioni sollevate nel **proprio blocco contenitore**. Il blocco raggruppa il rischioso `check(-5)` insieme al `CATCH` che lo sorveglia, così l'eccezione sollevata viene intercettata proprio qui e l'esecuzione riprende subito dopo il blocco. Senza avvolgerli in un blocco, il `CATCH` sorveglierebbe l'intero programma — e una volta intercettata l'eccezione il programma finirebbe semplicemente, senza alcun punto naturale in cui proseguire.

1. Il conclusivo `Negative.new(n => -10).throw` mostra l'altra faccia della cosa. Sta **fuori** dal blocco, quindi nessuno lo intercetta: l'eccezione si propaga fino in cima e il programma muore, stampando il messaggio e una traccia sull'errore standard e uscendo con uno stato diverso da zero. È questo il destino predefinito di qualunque eccezione non intercettata — ed è esattamente il motivo per cui il primo lancio aveva bisogno di un `CATCH` per sopravvivere.

{% include nav.html %}
