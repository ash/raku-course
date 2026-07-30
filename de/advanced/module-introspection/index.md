---
title: Modul-Introspektion
---

{% include menu.html %}

Der Name eines Moduls führt ein _Package_ ein — einen Namensraum, der die darin definierten Namen enthält. Früher, im [Abschnitt über Container](/de/advanced/containers), hast du `WHO` kennengelernt, das den `Stash` (die Symboltabelle) eines Packages zurückgibt. Modul-Introspection macht davon Gebrauch.

Die folgenden Beispiele verwenden das `Greeting`-Modul, das in den vorherigen Themen aufgebaut wurde — eine exportierte Subroutine und eine gemeinsam genutzte `our`-Variable:

```raku
unit module Greeting;

our $version = '1.0';

sub hello($name) is export {
    return "Hello, $name!";
}
```

Das Package eines Moduls wird mit einem nachgestellten `::` geschrieben. Mit `.keys` listest du die darin enthaltenen Namen auf:

```raku
use Greeting;

say Greeting::.keys.sort; # ($version EXPORT)
```

Das `Greeting`-Modul aus den vorherigen Themen definiert eine `our`-Variable, `$version`, sodass sein Package diesen Namen enthält — einschließlich des Sigils. Daneben befindet sich `EXPORT`, was überraschend wirken mag. Es ist ein Package, das Raku automatisch erstellt, um alles aufzunehmen, was ein Modul mit `is export` markiert, wie die Subroutine `hello`. Ein exportierter Name erscheint daher _nicht_ direkt im Package; er befindet sich innerhalb dieses `EXPORT`-Unter-Packages. (Die Schlüssel kommen in keiner festen Reihenfolge zurück, daher sortiert das Beispiel sie für ein stabiles Ergebnis.)

Du kannst einen Namen auch im Package nachschlagen, indem du ihn als Schlüssel verwendest. Dies erreicht denselben Wert wie das qualifizierte `$Greeting::version`:

```raku
use Greeting;

say Greeting::{'$version'}; # 1.0
```

## Auflisten, was ein Modul exportiert

Das oben gezeigte `EXPORT`-Package ist der Ort, an dem die exportierten Namen tatsächlich liegen. Du kannst sie auflisten, indem du eine Ebene tiefer schaust. Exporte ohne Tag gehen in die `DEFAULT`-Gruppe (siehe [Export-Tags](/de/advanced/modules-basics/export-tags)), und ihre `.keys` sind die exportierten Routinen:

```raku
use Greeting;

say Greeting::EXPORT::DEFAULT::.keys.sort; # (&hello)
```

Jeder Schlüssel ist ein exportierter Name mit seinem Sigil — hier die einzelne Subroutine `&hello`, dargestellt mit dem `&`, das eine Routine kennzeichnet. So kannst du herausfinden, was ein Modul seinen Nutzern zur Verfügung stellt, ohne dessen Quellcode zu lesen: Frage sein `EXPORT::DEFAULT`-Package, was es enthält.

Ein Package auf diese Weise zu inspizieren ist praktisch, wenn du herausfinden möchtest, was ein Modul bereitstellt, oder wenn du seine Namen dynamisch erreichen willst, anstatt jeden einzeln im Quellcode auszuschreiben.

{% include nav.html %}
