---
title: Oggetti eccezione
translations_gpt:
---

{% include menu.html %}

Un'eccezione è un oggetto, come qualunque altro in Raku. Quando scrivi `die 'something failed'`, Raku avvolge il tuo messaggio in un oggetto eccezione di tipo `X::AdHoc`.

Dentro un `CATCH` puoi ispezionare quell'oggetto. Il suo tipo viene da `.^name` e il suo testo da `.message`:

```raku
{
    die 'something failed';

    CATCH {
        default {
            say .^name;   # X::AdHoc
            say .message; # something failed
        }
    }
}
```

Conoscere il tipo ti permette di trattare errori diversi in modo diverso. Le eccezioni incorporate di Raku hanno tipi specifici, i cui nomi cominciano con `X::`, e puoi confrontarle con `when`, proprio come confrontavi valori in un blocco `given`/`when`:

```raku
{
    die 'something failed';

    CATCH {
        when X::AdHoc {
            say 'an ad-hoc error: ' ~ .message;
        }
        default {
            say 'some other error';
        }
    }
}
```

Questo stampa `an ad-hoc error: something failed`, perché l'eccezione corrisponde al tipo `X::AdHoc`. Confrontare il tipo è la base della gestione di errori specifici — l'idea su cui si costruisce la sezione sulle [eccezioni personalizzate](/it/oop/custom-exceptions).

{% include nav.html %}
