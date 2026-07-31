---
title: Eccezioni personalizzate
translations_gpt:
---

{% include menu.html %}

Oltre alle eccezioni incorporate `X::`, puoi definire le tue. Un'eccezione personalizzata è una classe che eredita dalla classe incorporata `Exception` e fornisce un metodo `message`:

```raku
class TooBig is Exception {
    has $.value;

    method message {
        "Value $.value is too big";
    }
}
```

`TooBig` è una classe normale — può avere attributi come `value` — ma poiché è `is Exception`, può essere sollevata. La sollevi creando un oggetto e chiamandovi sopra `.throw`:

```raku
my $value = 20 * 30;

TooBig.new(value => $value).throw if $value > 50;

CATCH {
    when TooBig {
        say .message;
    }
}
```

Il programma stampa:

```
Value 600 is too big
```

Dentro il `CATCH`, `when TooBig` corrisponde perché l'oggetto sollevato è di quel tipo. Un'eccezione personalizzata porta con sé qualunque dato le dai (qui il `value`), così il gestore può costruire un messaggio preciso o reagire in modo specifico — molto più utile di una semplice stringa passata a `die`.

Questo mette insieme tutto ciò che c'è in questa parte: un'eccezione personalizzata è una _classe_ (con attributi e un metodo) che partecipa al meccanismo delle eccezioni, pronta a segnalare esattamente che cosa è andato storto.

{% include nav.html %}
