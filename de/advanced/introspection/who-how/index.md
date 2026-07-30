---
title: '`WHO` und `HOW`'
---

{% include menu.html %}

Zwei weitere Introspektionswerkzeuge vervollständigen die Reihe: `HOW` und `WHO`.

## `HOW`

Jeder Wert in Raku wird von einem _Metaobjekt_ gestützt — einem Objekt, das weiß, wie der Typ des Wertes funktioniert. `HOW` (kurz für _Higher Order Workings_) gibt dieses Metaobjekt zurück:

```raku
my $x = 42;
say $x.HOW.^name; # Perl6::Metamodel::ClassHOW
```

Du hast das Metaobjekt die ganze Zeit verwendet, vielleicht ohne es zu bemerken. Das `.^` in `.^name` ist ein Methodenaufruf, der über `HOW` geleitet wird. Diese beiden Zeilen sind gleichwertig:

```raku
my $x = 42;
say $x.^name;        # Int
say $x.HOW.name($x); # Int
```

`$x.^name` ist also nur eine kürzere Schreibweise für `$x.HOW.name($x)`. Beachte, dass das Objekt erneut als Argument übergeben wird: Das Metaobjekt wird von jedem Wert des Typs *gemeinsam genutzt*, daher wird einer Meta-Methode mitgeteilt, nach welchem Objekt gefragt wird. Die `.^`-Form erledigt das automatisch für dich. (Bei `name` wird das Argument zufällig ignoriert, aber es zu übergeben ist die korrekte, allgemeine Form — einige Meta-Methoden verwenden es tatsächlich.)

Dasselbe gilt für andere Meta-Methoden, die dir begegnen können, wie `.^methods`, die die Methoden auflistet, auf die ein Wert reagiert.

## `WHO`

`WHO` gibt das _Paket_ zurück, zu dem ein Name gehört — die Symboltabelle, die in diesem Namensraum definiert ist:

```raku
say Int.WHO.^name; # Stash
```

Ein `Stash` (ein Symboltabellen-Hash) wird nützlich, wenn du mit Modulen arbeitest, da er dir ermöglicht, die Namen nachzuschlagen, die ein Modul definiert. Wir kommen darauf im [Abschnitt über Modul-Introspektion](/de/advanced/module-introspection) zurück; für den Moment reicht es zu wissen, dass `WHO` existiert und was es darstellt.

{% include nav.html %}
