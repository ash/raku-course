---
title: Mit Dateien arbeiten
translations_gpt:
---

{% include menu.html %}

Der einfachste Weg, mit einer Datei zu arbeiten, ist, sie ganz auf einmal zu lesen oder zu schreiben.

Die Routine `spurt` schreibt eine Zeichenkette in eine Datei und legt die Datei an (oder ersetzt ihren Inhalt, falls sie bereits besteht):

```raku
spurt 'greeting.txt', "Hello, file!\n";
```

Die Routine `slurp` liest den gesamten Inhalt einer Datei zurück in eine Zeichenkette:

```raku
my $text = slurp 'greeting.txt';
print $text; # Hello, file!
```

Zusammen erlauben `spurt` und `slurp` es Ihnen, Daten mit zwei kurzen Aufrufen zu sichern und wieder zu laden. (Hier wird `print` statt `say` verwendet, weil der Text bereits mit einem Zeilenumbruch endet.)

Diese Operationen auf ganzen Dateien sind ideal, wenn eine Datei klein genug ist, um bequem im Speicher zu liegen. Für größere Dateien oder wenn Sie eine Datei zeilenweise verarbeiten möchten, verwenden Sie einen [Dateihandle](/de/oop/file-handles), der am Ende dieses Abschnitts behandelt wird. Das nächste Thema zeigt, wie Sie an eine Datei anhängen, statt sie zu ersetzen.

{% include nav.html %}
