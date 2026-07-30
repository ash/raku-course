---
title: Eingebaute spezielle Variablen
---

{% include menu.html %}

Raku definiert eine Reihe von Variablen für dich vor. Die meisten davon sind _dynamisch_ (das `*`-Twigil), also kannst du sie — wie du bei den [dynamischen Variablen](/de/advanced/special-variables/dynamic-variables) gesehen hast — überall lesen und sogar für einen Geltungsbereich überschreiben. Hier sind diejenigen, die du am häufigsten brauchen wirst.

## Standardströme

Ein- und Ausgabe fließen durch drei dynamische Variablen: `$*OUT` (Standardausgabe), `$*ERR` (Standardfehlerausgabe) und `$*IN` (Standardeingabe). `say` und `print` schreiben nach `$*OUT`; um Text stattdessen an die Standardfehlerausgabe zu senden, rufst du die Methode auf `$*ERR` auf:

```raku
$*OUT.say('normal output'); # goes to standard output
$*ERR.say('a diagnostic');  # goes to standard error
```

Da diese dynamisch sind, leitet das Umdeklarieren von `$*OUT` in einem Block die Ausgabe von allem, was innerhalb dieses Blocks aufgerufen wird, an das neue Ziel um — ohne irgendetwas an diesem Code zu ändern.

## Das Programm und sein Prozess

Einige Variablen beschreiben das laufende Programm selbst:

```raku
say $*PROGRAM-NAME; # the path of the script being run
say $*PID;          # the process id of this program
say $*CWD;          # the current working directory
```

Ihre Werte ändern sich von Ausführung zu Ausführung, daher wird hier keine feste Ausgabe gezeigt.

## Kommandozeile und Umgebung

Die Argumente und die Umgebung kommen in zwei vorgefertigten Containern:

* `@*ARGS` — die Liste der Kommandozeilenargumente (dieselben, die eine `MAIN`-Subroutine empfängt)
* `%*ENV` — die Umgebungsvariablen als Hash

```raku
say @*ARGS.elems; # how many arguments were passed
say %*ENV<HOME>;  # the value of the HOME environment variable
```

Diese eingebauten Variablen ersparen dir, dieselben Informationen von Hand zu verdrahten. Und weil sie dynamisch sind und über den Aufrufstapel aufgelöst werden, kann jede `$*`-eingebaute Variable für einen Geltungsbereich genau wie eine eigene `$*`-Variable überschrieben werden.

Neben diesen dynamischen Variablen hat Raku auch die `?`-Kompilierzeit-Variablen — `$?FILE` und `$?LINE` — die du bereits auf der Seite über [Twigils](/de/advanced/special-variables/twigils) kennengelernt hast.

{% include nav.html %}
