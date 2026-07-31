---
title: 'Soluzione: Segnalate e recuperate'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $timeout = 30;

{
    die 'config missing';
    $timeout = 60;

    CATCH {
        default {
            say "warning: {.message}; keeping default";
        }
    }
}

say "timeout is $timeout seconds";
```

🦋 Trova il programma nel file [report-and-recover.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/report-and-recover.raku).

## Output

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Commenti

1. Quando il `die` solleva l'eccezione, il resto del blocco viene abbandonato — quindi la riga `$timeout = 60` non gira mai e `$timeout` mantiene il suo valore predefinito `30`.

1. Il `CATCH` gestisce l'eccezione (stampando un avviso), quindi il programma non si ferma. Prosegue con il valore predefinito, che è esattamente ciò che significa *recuperare* da un errore: prendere nota del problema, ripiegare su qualcosa di sicuro e continuare.

{% include nav.html %}
