---
title: Laden tijdens runtime
translations_gpt: Oefening 'Laden tijdens uitvoering'
---

{% include menu.html %}

## Opgave

Je krijgt een module `Greeting.rakumod` die een subroutine `hello` exporteert:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Laad deze module met `require` in plaats van `use`, zodat deze wordt geladen tijdens de **uitvoering**. Omdat `require` namen niet automatisch importeert, som je het gewenste symbool op met `require Greeting <&hello>;`. Roep vervolgens `hello('Sam')` aan en druk het resultaat af.

Om te laten zien wat laden tijdens uitvoering oplevert, plaats je de `require` in een `sub MAIN` met een `--quiet`-vlag, zodat de module *alleen* geladen wordt wanneer er daadwerkelijk een begroeting gewenst is. Met `--quiet` drukt het programma `Silence.` af en raakt het de module helemaal niet aan.

## Voorbeeld

Uitgevoerd met de module op het zoekpad, drukt het programma af:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
