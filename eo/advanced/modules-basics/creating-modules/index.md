---
title: Krei modulojn
---

{% include menu.html %}

Dum programoj kreskas, helpas dividi ilin en reuzeblajn pecojn. _Modulo_ estas unuo de kodo, konservata en sia propra dosiero, kiun aliaj programoj povas ŝargi kaj uzi.

Moduldosiero havas la finaĵon `.rakumod` kaj komenciĝas per nomado de la modulo per `unit module`. Subprogramoj, kiujn vi skribas interne, estas privataj defaŭlte; por fari unu disponebla al kodo, kiu uzas la modulon, marku ĝin per la trajto `is export`.

Jen modulo konservita en dosiero nomata `Greeting.rakumod`:

```raku
unit module Greeting;

sub hello($name) is export {
    return "Hello, $name!";
}
```

La subprogramo `hello` portas `is export`, do ĝi estos videbla por ajna programo, kiu uzas la modulon. Subprogramo sen `is export` restus privata en la modulo.

Modulo povas ankaŭ kunhavi datumojn per `our`-variabloj, kiuj fariĝas atingeblaj per la nomo de la modulo. Aldono de versio-numero al `Greeting` estas tiel simpla kiel unu plian linion en la dosiero:

```raku
our $version = '1.0';
```

Kun tiu linio en `Greeting.rakumod`, la valoro estas disponebla kiel `$Greeting::version` ĉie, kie la modulo estas ŝargita.

La sekvaj temoj montras [kiel programo ŝargas tian modulon](/eo/advanced/modules-basics/using-modules) kaj kion precize ĝi ricevas de ĝi.

{% include nav.html %}
