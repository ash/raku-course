---
title: Zur Laufzeit laden
---

{% include menu.html %}

## Problem

Dir liegt ein Modul `Greeting.rakumod` vor, das eine Subroutine `hello` exportiert:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Lade dieses Modul mit `require` statt `use`, damit es zur **Laufzeit** eingebunden wird. Da `require` keine Namen automatisch importiert, liste das gewünschte Symbol mit `require Greeting <&hello>;` auf. Rufe dann `hello('Sam')` auf und gib das Ergebnis aus.

Um zu zeigen, was das Laden zur Laufzeit bringt, setze das `require` in ein `sub MAIN` mit einem `--quiet`-Flag, sodass das Modul *nur* geladen wird, wenn tatsächlich eine Begrüßung gewünscht ist. Mit `--quiet` gibt das Programm `Silence.` aus und greift überhaupt nicht auf das Modul zu.

## Beispiel

Mit dem Modul im Suchpfad ausgeführt, gibt das Programm aus:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
