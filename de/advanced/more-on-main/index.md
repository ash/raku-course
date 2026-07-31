---
title: Mehr zu MAIN-Unterprogrammen
translations_gpt:
---

{% include menu.html %}

Im Essentials-Teil haben Sie `MAIN` verwendet, [um Kommandozeilenargumente zu empfangen](/de/essentials/the-main-function/reading-command-line-arguments). Raku bietet Ihnen rund um `MAIN` mehr als nur die Weitergabe der Werte.

## Die Verwendungsmeldung

Wenn die Argumente auf der Kommandozeile nicht zur Signatur von `MAIN` passen, führt Raku den Körper nicht aus. Stattdessen gibt es eine automatisch generierte _Verwendungsmeldung_ aus, die beschreibt, wie das Programm aufgerufen werden sollte.

Nehmen Sie dieses Programm:

```raku
sub MAIN($name) {
    say "Hello, $name!";
}
```

Korrekt aufgerufen, begruesst es die Person:

```console
$ raku hello.raku Anna
Hello, Anna!
```

Ohne Argument aufgerufen, passt die Signatur nicht, und Raku gibt die Verwendungsmeldung anstelle der Begruessung aus:

```console
$ raku hello.raku
Usage:
  hello.raku <name>
```

Die Meldung wird aus den Parameternamen erstellt. Wenn Sie ihnen aussagekraeftige Namen geben, wird der Hilfetext automatisch nützlich.

## Benannte Argumente

Parameter von `MAIN` können sowohl benannt als auch positional sein. Ein benannter Parameter wird zu einem `--option=wert`-Schalter auf der Kommandozeile, und ein Standardwert macht ihn optional:

```raku
sub MAIN(:$name = 'World') {
    say "Hello, $name!";
}
```

```console
$ raku hello.raku
Hello, World!

$ raku hello.raku --name=Raku
Hello, Raku!
```

{% include nav.html %}
