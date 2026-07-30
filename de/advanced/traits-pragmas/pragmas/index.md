---
title: Pragmas
translations_gpt:
---

{% include menu.html %}

Ein _Pragma_ sieht aus wie ein mit `use` geladenes Modul, aber anstatt Code einzubinden, ändert es eine Kompilierungsregel für den Rest des aktuellen Gültigkeitsbereichs. Aktivieren Sie eines mit `use` und (wo es sinnvoll ist) deaktivieren Sie es mit `no`.

Das wichtigste Pragma, `strict`, ist in Raku **standardmäßig aktiviert**: Es erfordert, dass jede Variable vor der Verwendung deklariert wird, weshalb ein Tippfehler in einem Variablennamen erkannt wird, anstatt stillschweigend eine neue Variable zu erzeugen.

Das Deaktivieren von `strict` mit `no strict` hebt diese Anforderung auf, sodass Sie einer Variablen einen Wert zuweisen können, die nie mit `my` deklariert wurde:

```raku
no strict;

$x = 42;
say $x; # 42
```

Mit dem standardmäßig aktiven `strict` wäre das bloße `$x = 42` ein Kompilierzeitfehler — *Variable '$x' is not declared*. Die Zeile `no strict` lockert die Regel für den Rest des umschließenden Gültigkeitsbereichs.

Weitere Pragmas sind `fatal` (das einen stillen Fehler in eine ausgelöste Ausnahme verwandelt — nützlich, sobald Sie die Ausnahmebehandlung kennengelernt haben), `isms` (um Idiome aus anderen Sprachen zu erlauben) und `variables` (um Variablenregeln anzupassen). Die Wirkung eines Pragmas ist _lexikalisch_ — sie dauert nur bis zum Ende des Blocks, in dem es erscheint — sodass Sie eine Regel genau für den Codebereich verschärfen oder lockern können, in dem Sie es möchten.

Ein Pragma nimmt ein Argument entgegen: `lib` fügt ein Verzeichnis zur Liste hinzu, die Raku beim Laden von Modulen durchsucht — das programmierbare Äquivalent der Kommandozeilenoption `-I`:

```raku
use lib 'lib';
```

Sie werden es verwenden, sobald Sie beginnen, Ihre eigenen [Module](/de/advanced/modules-basics/using-modules) zu schreiben und zu laden.

{% include nav.html %}
