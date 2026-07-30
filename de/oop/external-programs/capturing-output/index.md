---
title: Ausgabe auffangen
translations_gpt:
---

{% include menu.html %}

Um zu lesen, was ein externes Programm ausgibt, statt es an den Bildschirm gehen zu lassen, übergeben Sie beim Starten `:out`. Das gelieferte `Proc` hat dann einen Handle `.out`, aus dem Sie lesen können:

```raku
my $proc = run 'echo', 'hello', :out;
my $output = $proc.out.slurp(:close);
say $output.chomp; # hello
```

`:out` leitet die Standardausgabe des Programms in das `Proc` um. Der Handle `.out` funktioniert wie die Dateihandles aus dem vorigen Abschnitt, und `.slurp` liest auf einmal alles daraus. Das Adverb `:close` ist eine praktische Abkürzung: Nach dem Lesen schließt es den Handle für Sie — dasselbe Aufräumen, das Sie bei einem Dateihandle ausdrücklich mit `.close` gemacht haben —, sodass nichts offen bleibt. Schließlich entfernt `.chomp` den abschließenden Zeilenumbruch, den `echo` anfügt.

Dasselbe funktioniert mit `shell`, was praktisch ist, um das Ergebnis einer Pipeline aufzufangen:

```raku
my $proc = shell 'echo hello | tr a-z A-Z', :out;
say $proc.out.slurp(:close).chomp; # HELLO
```

Sie können auch den Fehlerstrom auffangen, mit `:err` und dem zugehörigen Handle `.err`. Sowohl `:out` als auch `:err` zu übergeben hält die beiden Ströme getrennt, jeden in seinem eigenen Handle, sodass Sie sie einzeln lesen können:

```raku
my $proc = run 'sh', '-c', 'echo out-line; echo err-line >&2', :out, :err;

say 'stdout: ', $proc.out.slurp(:close).chomp; # stdout: out-line
say 'stderr: ', $proc.err.slurp(:close).chomp; # stderr: err-line
```

Hier gibt der Shell-Befehl eine Zeile auf der Standardausgabe und eine auf der Standardfehlerausgabe aus (`>&2` leitet dorthin um). Weil wir beide Ströme angefordert haben, enthalten `.out` und `.err` sie unabhängig voneinander — die gewöhnliche Ausgabe des Programms vermischt sich nie mit seiner Diagnose.

Ausgabe aufzufangen ist der Weg, ein externes Programm als Baustein zu verwenden — führen Sie es aus, lesen Sie sein Ergebnis und arbeiten Sie mit diesen Daten in Ihrem eigenen Programm weiter.

{% include nav.html %}
