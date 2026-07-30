---
title: Threads zusammenführen
translations_gpt:
---

{% include menu.html %}

Um auf das Ende eines Threads zu warten, rufen Sie darauf `.finish` auf (auch als `.join` geschrieben). Das Hauptprogramm hält dort an, bis der Thread fertig ist:

```raku
my $t = Thread.start({ say 'in the thread' });
$t.finish;
say 'done';
```

Das gibt aus:

```
in the thread
done
```

Weil `.finish` wartet, erscheint die Meldung des Threads gewiss vor `done`. Ohne das `.finish` wäre die Reihenfolge unvorhersagbar, und das Programm könnte sogar enden, bevor der Thread Gelegenheit zur Ausgabe hatte.

Wenn Sie mehrere Threads starten, führen Sie jeden zusammen, um sicher zu sein, dass alle fertig sind:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });
$a.finish;
$b.finish;
say 'both finished';
```

Die beiden Threads laufen nebenläufig, und beide vor dem abschließenden `say` zusammenzuführen stellt sicher, dass `both finished` erst ausgegeben wird, wenn sie wirklich fertig sind. Das Zusammenführen ist der Weg, nebenläufige Arbeit an einem vorhersagbaren Punkt Ihres Programms wieder zusammenzubringen.

Da sich ein Methodenaufruf auf einer [Junction](/de/paradigms/junctions) auf jeden enthaltenen Wert ausbreitet, können Sie mehrere Threads in einem einzigen Ausdruck zusammenführen. Verbinden Sie sie mit dem `all`-Operator `&` und rufen Sie `.finish` auf der Junction auf:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });

($a & $b).finish;
say 'both finished';
```

`.finish` auf `$a & $b` aufzurufen führt es auf beiden Threads aus, das Programm wartet also, bis keiner mehr läuft — dasselbe Ergebnis wie das einzelne Zusammenführen, aber es liest sich als „führe diese beiden zu Ende“ und funktioniert für beliebig viele mit `&` verbundene Threads.

{% include nav.html %}
