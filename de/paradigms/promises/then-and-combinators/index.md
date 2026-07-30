---
title: Aneinanderreihen und verbinden
translations_gpt:
---

{% include menu.html %}

Promises werden noch mächtiger, wenn Sie sie verbinden. Am häufigsten gebraucht wird das Warten auf **mehrere** zugleich. `await` nimmt eine Liste von Promises auf und liefert ihre Ergebnisse in derselben Reihenfolge:

```raku
my @jobs = (start { 1 }), (start { 2 }), (start { 3 });
say await @jobs;     # (1 2 3)
say [+] await @jobs; # 6
```

Die drei Aufgaben laufen nebenläufig; `await @jobs` wartet auf alle und reicht `(1, 2, 3)` zurück. Da die Ergebnisse in derselben Reihenfolge wie die Promises zurückkommen, können Sie sie wie gewohnt reduzieren.

Sie können mit `.then` auch Arbeit an ein Promise anhängen, was einen Folgeblock ausführt, sobald das Promise fertig ist. Darin ist `.result` der Wert des ursprünglichen Promise:

```raku
my $p = start { 10 };
my $q = $p.then({ .result * 2 });
say await $q; # 20
```

`$q` ist ein neues Promise, das das Ergebnis von `$p` verdoppelt. Es abzuwarten ergibt `20`.

Der Block hat keinen ausdrücklichen Parameter, er erhält das fertige Promise also als Themenvariable `$_` — weshalb ein blankes `.result` funktioniert: Es ist in Wahrheit `$_.result`. Möchten Sie diesem Promise lieber einen Namen geben, nehmen Sie einen Pointy Block:

```raku
my $q = $p.then(-> $prev { $prev.result * 2 });
```

Das verhält sich genau gleich; `$prev` ist das ursprüngliche Promise `$p`, und `$prev.result` ist sein Wert.

Mit `start`, `await` und `.then` können Sie ganze Pipelines nebenläufiger Arbeit beschreiben: viele Aufgaben starten, ihre Ergebnisse verbinden und aus alten neue Aufgaben bauen — und das alles, ohne je einen Thread unmittelbar anzufassen.

{% include nav.html %}
