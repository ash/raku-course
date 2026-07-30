---
title: Ein Promise abwarten
translations_gpt:
---

{% include menu.html %}

`await` nimmt ein Promise auf, wartet auf sein Ende und liefert sein Ergebnis:

```raku
my $p = start { 7 * 6 };
say await $p; # 42
```

Das Programm hält bei `await` nur so lange an, wie nötig, und läuft dann mit dem Wert weiter, den das Promise erzeugt hat.

Bei mehreren Promises wartet `await` auf **alle** und liefert ihre Ergebnisse in derselben Reihenfolge wie die Promises in der Liste:

```raku
my @jobs = (start { 5 }), (start { 10 }), (start { 15 });
say await @jobs;     # (5 10 15)
say [+] await @jobs; # 30
```

Die Aufgaben laufen nebenläufig, doch `await @jobs` kehrt erst zurück, wenn jede fertig ist. Jedes Ergebnis steht danach an derselben Stelle wie sein Promise in `@jobs` — gleich, welche Aufgabe zufällig zuerst fertig war.

Wurde ein abgewartetes Promise **gebrochen** — sein Block warf eine Ausnahme —, wirft `await` diese Ausnahme an der Stelle des `await` erneut. Fehler in Hintergrundarbeit tauchen also dort auf, wo Sie darauf warten, sodass Sie sie mit dem gewohnten `try` / `CATCH` aus dem Teil über Ausnahmen behandeln können:

```raku
my $p = start { die 'no such file' };

my $result = try await $p;
say $result // "the job failed: $!";
```

Das gibt aus:

```
the job failed: no such file
```

Das `die` geschieht auf einem Hintergrundthread, doch die Ausnahme reist mit dem Promise mit und tritt beim `await` hervor. Das `try` fängt sie dort, lässt `$result` undefiniert und den Fehler in `$!` — ein Fehlschlag in nebenläufiger Arbeit wird also genau wie jede andere Ausnahme behandelt. Beim Abwarten geht es daher nicht nur darum, einen Wert zu bekommen; es ist der Augenblick, in dem sich nebenläufige Arbeit wieder in den Hauptfluss einfügt, mit Ergebnissen wie mit Fehlern.

{% include nav.html %}
