---
title: Introspezione dei moduli
translations_gpt:
---

{% include menu.html %}

Il nome di un modulo introduce un _package_ — uno spazio dei nomi che contiene i nomi definiti al suo interno. In precedenza, nella [sezione sui container](/it/advanced/containers), hai incontrato `WHO`, che restituisce lo `Stash` (la tabella dei simboli) di un package. L'introspezione dei moduli sfrutta proprio questo meccanismo.

Gli esempi seguenti utilizzano il modulo `Greeting` costruito nei capitoli precedenti — una subroutine esportata e una variabile `our` condivisa:

```raku
unit module Greeting;

our $version = '1.0';

sub hello($name) is export {
    return "Hello, $name!";
}
```

Il package di un modulo si scrive con `::` finale. Aggiungendo `.keys` si ottiene l'elenco dei nomi che contiene:

```raku
use Greeting;

say Greeting::.keys.sort; # ($version EXPORT)
```

Il modulo `Greeting` dei capitoli precedenti definisce una variabile `our`, `$version`, quindi il suo package contiene quel nome — sigillo incluso. Accanto ad esso si trova `EXPORT`, che potrebbe sembrare inaspettato. Si tratta di un package che Raku crea automaticamente per contenere tutto ciò che un modulo contrassegna come `is export`, come la subroutine `hello`. Un nome esportato quindi _non_ appare direttamente nel package; risiede all'interno di quel sotto-package `EXPORT`. (Le chiavi vengono restituite senza un ordine fisso, quindi l'esempio le ordina per ottenere un risultato stabile.)

Si può anche cercare un nome nel package usandolo come chiave. Questo raggiunge lo stesso valore del qualificato `$Greeting::version`:

```raku
use Greeting;

say Greeting::{'$version'}; # 1.0
```

## Elencare ciò che un modulo esporta

Il package `EXPORT` visto sopra è dove risiedono effettivamente i nomi esportati, quindi è possibile elencarli guardando un livello più in profondità. Le esportazioni senza un tag finiscono nel gruppo `DEFAULT` (vedi [Tag di esportazione](/it/advanced/modules-basics/export-tags)), e le sue `.keys` sono le routine esportate:

```raku
use Greeting;

say Greeting::EXPORT::DEFAULT::.keys.sort; # (&hello)
```

Ogni chiave è un nome esportato con il suo sigillo — qui l'unica subroutine `&hello`, mostrata con il `&` che indica una routine. Questo è il modo per scoprire ciò che un modulo mette a disposizione dei suoi utenti senza leggerne il codice sorgente: basta chiedere al suo package `EXPORT::DEFAULT` cosa contiene.

Fare introspezione su un package in questo modo è utile quando si vuole scoprire cosa offre un modulo, o per raggiungere i suoi nomi in modo dinamico anziché scriverli uno per uno nel codice sorgente.

{% include nav.html %}
