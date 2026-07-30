---
title: 'Lösung: Ein Fehler bei negativen Zahlen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Negative is Exception {
    has $.n;

    method message {
        "$.n is negative";
    }
}

sub check($n) {
    Negative.new(n => $n).throw if $n < 0;
    return $n;
}

{
    say check(-5);

    CATCH {
        when Negative {
            say .message;
        }
    }
}

Negative.new(n => -10).throw;
```

🦋 Du findest den Quellcode in der Datei [negative-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/negative-error.raku).

## Ausgabe

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Kommentare

1. `Negative is Exception` macht die Klasse werfbar, und ihre Methode `message` baut den Text aus dem Attribut `n` auf.

1. `check` prüft seine Eingabe und wirft für eine negative Zahl die eigene Ausnahme. Die Ausnahme wandert aus `check` hinaus zum `CATCH` im aufrufenden Block, wo `when Negative` sie nach Typ trifft und die Meldung ausgibt. Eingaben zu prüfen und schlechte Werte mit einer typisierten Ausnahme zu melden ist eine sehr häufige, echte Verwendung eigener Ausnahmen.

1. Die `{ … }` um den Aufruf stehen dort, weil ein `CATCH`-Phaser die Ausnahmen behandelt, die in **seinem eigenen umgebenden Block** geworfen werden. Der Block fasst das riskante `check(-5)` mit dem bewachenden `CATCH` zusammen, die geworfene Ausnahme wird also genau hier gefangen, und die Ausführung setzt gleich hinter dem Block fort. Ohne diese Klammerung würde das `CATCH` stattdessen das ganze Programm bewachen — und sobald es die Ausnahme gefangen hätte, wäre das Programm schlicht zu Ende, ohne natürliche Stelle zum Weitermachen.

1. Das abschließende `Negative.new(n => -10).throw` zeigt die andere Seite. Es steht **außerhalb** des Blocks, nichts fängt es also: Die Ausnahme pflanzt sich bis ganz nach oben fort, und das Programm stirbt, gibt die Meldung samt Rückverfolgung auf der Standardfehlerausgabe aus und endet mit einem Status ungleich null. Das ist das Standardschicksal jeder Ausnahme, die Sie nicht fangen — und genau der Grund, warum der erste Wurf ein `CATCH` brauchte, um zu überleben.

{% include nav.html %}
