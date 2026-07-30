---
title: Ein Verzeichnis auflisten
translations_gpt:
---

{% include menu.html %}

Die Routine `dir` liefert die Einträge eines Verzeichnisses — jeden als Pfadobjekt. Ihre Reihenfolge liegt nicht fest, daher ist es üblich, das Ergebnis für eine vorhersagbare Ausgabe zu sortieren.

```raku
mkdir 'box';
spurt 'box/a.txt', '';
spurt 'box/b.txt', '';

for dir('box').sort -> $entry {
    say $entry.basename;
}
```

Das gibt die Namen der Dateien im Verzeichnis `box` der Reihe nach aus:

```
a.txt
b.txt
```

Jeder Eintrag ist ein vollständiges Pfadobjekt; die Methode `basename` liefert nur den letzten Namen, ohne den Verzeichnisteil. Einem Pfadobjekt können Sie dieselben Fragen wie zuvor stellen — `.f`, `.d`, `.e` —, Sie können also etwa ein Verzeichnis durchgehen und nur die Dateien herausgreifen.

{% include nav.html %}
