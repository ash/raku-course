---
title: Standardströme
translations_gpt:
---

{% include menu.html %}

Jedes Programm hat drei _Standardströme_, die es mit seiner Umgebung verbinden: die Standardausgabe, die Standardfehlerausgabe und die Standardeingabe. Raku stellt sie über drei besondere Variablen bereit: `$*OUT`, `$*ERR` und `$*IN`.

Auf die Standardausgabe haben Sie die ganze Zeit geschrieben: `say` und `print` schicken ihren Text an `$*OUT`.

```raku
say 'Hello'; # goes to standard output
```

Diagnose- und Fehlermeldungen bleiben davon getrennt, auf der Standardfehlerausgabe, damit sie sich nicht unter die eigentliche Ausgabe des Programms mischen. Die Routine `note` schreibt dorthin:

```raku
note 'Something looks wrong'; # goes to standard error
```

Diese Trennung ist nützlich, weil sich die beiden Ströme unabhängig umleiten lassen — Sie können etwa die Ausgabe eines Programms in eine Datei sichern und seine Fehlermeldungen trotzdem am Bildschirm sehen.

Sie können auch direkt in die Ströme schreiben. Sowohl `$*OUT` als auch `$*ERR` ist ein _Handle_ mit eigenen Methoden `say` und `print`:

```raku
$*OUT.say('a normal line');
$*ERR.say('a diagnostic line');
```

Der dritte Strom, `$*IN`, ist die Standardeingabe. Ihm sind Sie mittelbar über `prompt` begegnet, das eine Zeile daraus liest. Auf das Lesen von Eingaben kommen wir bei den [Dateihandles](/de/oop/file-handles) zurück, denn `$*IN` ist genauso ein Handle wie eine geöffnete Datei.

{% include nav.html %}
