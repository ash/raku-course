---
title: 'Il phaser `CATCH`'
translations_gpt:
---

{% include menu.html %}

Il blocco `try` è comodo, ma tratta l'intero blocco come un'unica unità: o funziona o non funziona. Il phaser `CATCH` ti dà un controllo più fine — ti permette di gestire un'eccezione _dentro_ il blocco in cui è avvenuta e di decidere che cosa fare.

`CATCH` è un phaser, come quelli che hai incontrato nella [sezione sul flusso di controllo](/it/advanced/phasers). Lo scrivi ovunque dentro un blocco; gira solo se lì viene sollevata un'eccezione. L'eccezione è disponibile come argomento corrente `$_`:

```raku
{
    die 'Boom!';

    CATCH {
        default {
            say 'Caught: ' ~ .message;
        }
    }
}

say 'after';
```

Il programma stampa:

```
Caught: Boom!
after
```

Il blocco `default` dentro `CATCH` gestisce qualunque eccezione. Una volta che è girato, l'eccezione è considerata gestita, quindi il programma non si ferma: l'esecuzione prosegue dopo il blocco che lo racchiude, ed è per questo che viene stampato `after`.

Senza il `CATCH`, il `die` avrebbe chiuso il programma prima che si potesse raggiungere `after`.

{% include nav.html %}
