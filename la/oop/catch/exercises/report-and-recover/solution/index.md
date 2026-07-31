---
title: 'Solutio: Nuntia et recupera'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [report-and-recover.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/report-and-recover.raku).

## Exitus

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Commentarii

1. Cum `die` iacit, reliqua clausulae pars deseritur — itaque linea `$timeout = 60` numquam currit, et `$timeout` valorem praedefinitum `30` servat.

1. `CATCH` exceptionem tractat (monitum imprimens), itaque programma non sistit. Cum valore praedefinito pergit, quod exacte est id quod ab errore *recuperare* significat: problema nota, ad aliquid tutum recurre, et perge.

{% include nav.html %}
