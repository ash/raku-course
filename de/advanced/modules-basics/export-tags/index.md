---
title: Export-Tags
---

{% include menu.html %}

Eine Subroutine mit `is export` zu markieren, platziert sie in der _Standard_-Exportgruppe eines Moduls — die Namen, die ein einfaches `use` einbringt. Indem du `is export` ein _Tag_ gibst, kannst du Exporte in benannte Gruppen sortieren und jedes Programm die gewünschte Menge auswählen lassen.

Ein Tag wird in Klammern nach `is export` geschrieben:

```raku
unit module Greeting;

sub hello($name)   is export            { "Hello, $name!" }
sub goodbye($name) is export(:partings) { "Goodbye, $name!" }
```

`hello` hat kein Tag, gehört also zur Standardgruppe; `goodbye` ist mit `:partings` getaggt.

Ein einfaches `use` importiert nur die Standardgruppe:

```raku
use Greeting;      # hello is available; goodbye is not
```

Die Angabe eines Tags importiert stattdessen diese Gruppe — und, vielleicht überraschend, _nicht_ auch die Standardgruppe:

```raku
use Greeting :partings; # goodbye is available; hello is not
```

Wenn du `:partings` anforderst, erhältst du genau diese Gruppe. Um alles zu importieren, was ein Modul exportiert, verwende das eingebaute Tag `:ALL`:

```raku
use Greeting :ALL; # both hello and goodbye
```

Zwei besondere Tags sind wissenswert. `:ALL` wird von jedem Modul unterstützt und importiert alle seine Exporte. `:MANDATORY` kannst du auf eine Routine setzen, die immer importiert werden soll, egal welches Tag der Aufrufer wählt.

Jedes Tag ist eigentlich ein Paket innerhalb des `EXPORT`-Pakets des Moduls — zum Beispiel `Greeting::EXPORT::partings` — was genau das ist, was die [Modul-Introspektion](/de/advanced/module-introspection) auflistet. Tags ermöglichen es einem größeren Modul, seine Standardoberfläche klein zu halten und trotzdem zusätzliche Funktionen auf Anfrage anzubieten.

{% include nav.html %}
