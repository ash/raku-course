---
title: 'Solution: Laden tijdens runtime'
translations_gpt: De oplossing van 'Laden tijdens uitvoering'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

Het programma, `require-import.raku`:

```raku
sub MAIN(Bool :$quiet) {
    if $quiet {
        say 'Silence.';
    }
    else {
        require Greeting <&hello>;
        say hello('Sam');
    }
}
```

🦋 Je kunt beide bronbestanden vinden in de map [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime).

## Uitvoer

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Opmerkingen

1. `require` laadt de module tijdens de uitvoering in plaats van tijdens het compileren. Op zichzelf importeert het niets, waardoor een kale `hello` onbekend zou zijn.

1. De `<&hello>`-lijst vertelt `require` om dat ene symbool te importeren, zodat na het statement `hello('Sam')` direct aangeroepen kan worden, wat `Hello, Sam!` oplevert.

1. Dit is waarvoor `require` *bedoeld* is: omdat het tijdens de uitvoering draait, kan het binnen een `if` staan. Wanneer `--quiet` meegegeven wordt, wordt die tak overgeslagen en wordt de module nooit geladen — iets wat een `use` tijdens het compileren niet kan vermijden.

{% include nav.html %}
