---
title: Tag di esportazione
translations_gpt: Tag di esportazione
---

{% include menu.html %}

Contrassegnare una subroutine con `is export` la inserisce nel gruppo di esportazione _predefinito_ di un modulo — i nomi che un semplice `use` importa. Assegnando un _tag_ a `is export`, puoi organizzare le esportazioni in gruppi denominati e lasciare che ogni programma scelga il set desiderato.

Un tag si scrive tra parentesi dopo `is export`:

```raku
unit module Greeting;

sub hello($name)   is export            { "Hello, $name!" }
sub goodbye($name) is export(:partings) { "Goodbye, $name!" }
```

`hello` non ha tag, quindi appartiene al gruppo predefinito; `goodbye` e taggato `:partings`.

Un semplice `use` importa solo il gruppo predefinito:

```raku
use Greeting;      # hello is available; goodbye is not
```

Specificando un tag si importa quel gruppo invece — e, forse sorprendentemente, _non_ anche quello predefinito:

```raku
use Greeting :partings; # goodbye is available; hello is not
```

Richiedere `:partings` da esattamente quel gruppo. Per importare tutto cio che un modulo esporta, usa il tag integrato `:ALL`:

```raku
use Greeting :ALL; # both hello and goodbye
```

Due tag speciali meritano di essere conosciuti. `:ALL` e supportato da ogni modulo e importa tutte le sue esportazioni. `:MANDATORY` e un tag che puoi applicare a una routine che deve essere importata indipendentemente dal tag scelto dal chiamante.

Ogni tag e in realta un pacchetto all'interno del pacchetto `EXPORT` del modulo — `Greeting::EXPORT::partings`, per esempio — che e esattamente cio che l'[introspezione dei moduli](/it/advanced/module-introspection) elenca. I tag permettono a un modulo piu grande di mantenere ridotta la superficie predefinita, offrendo al contempo funzionalita aggiuntive su richiesta.

{% include nav.html %}
