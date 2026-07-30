---
title: Module verwenden
---

{% include menu.html %}

Um ein Modul zu verwenden, lade es mit der `use`-Anweisung. Danach sind die Namen, die das Modul exportiert, verfügbar, als hättest du sie selbst geschrieben.

Angenommen, die Datei `Greeting.rakumod` aus dem vorherigen Thema liegt vor, dann verwendet ein Programm sie so:

```raku
use Greeting;

say hello('Anna');
```

Da `hello` mit `is export` markiert wurde, macht die `use`-Anweisung sie verfügbar, und das Programm ruft sie direkt auf:

```
Hello, Anna!
```

Damit Raku das Modul findet, muss es sich im Modul-Suchpfad befinden. Wenn die Moduldatei im selben Verzeichnis wie dein Programm liegt, sagst du Raku mit der Option `-I.` (der Punkt bedeutet „das aktuelle Verzeichnis"), dort zu suchen:

```console
$ raku -I. program.raku
Hello, Anna!
```

Installierte Module (später behandelt unter [Module aus dem Web installieren](/de/advanced/installing-modules)) werden automatisch gefunden, sodass die Option `-I` nur für Module benötigt wird, die neben deinem eigenen Programm liegen.

{% include nav.html %}
