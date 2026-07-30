---
title: start und await
translations_gpt:
---

{% include menu.html %}

Das Schlüsselwort `start` führt einen Block im Hintergrund aus und liefert sofort ein `Promise`:

```raku
my $p = start { 2 + 2 };
```

Die Arbeit geschieht auf Rakus Threadpool, während Ihr Programm weiterläuft. Um das Ergebnis zu bekommen, nehmen Sie `await`, das auf das Ende des Promise wartet und Ihnen seinen Wert gibt:

```raku
my $p = start { 2 + 2 };
say await $p; # 4
```

`await` blockiert genau so lange, wie das Promise braucht, und liefert dann, was der Block erzeugt hat — hier `4`. Ist die Arbeit schon fertig, wenn Sie abwarten, bekommen Sie das Ergebnis sofort.

Dieses Paar — `start` zum Starten, `await` zum Abholen — ist der Kern der auf Promises gestützten Nebenläufigkeit. Sie können mehrere Stücke Arbeit starten, sie zugleich laufen lassen und ihre Ergebnisse abwarten, wenn Sie so weit sind, und genau darauf baut das nächste Thema auf.

{% include nav.html %}
