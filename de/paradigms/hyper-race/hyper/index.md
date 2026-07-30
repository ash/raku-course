---
title: Parallele Maps mit hyper
translations_gpt:
---

{% include menu.html %}

Rufen Sie `.hyper` vor einem `map` oder `grep` auf einer Liste auf, und die Arbeit verteilt sich über mehrere Arbeits-Threads — während die Ergebnisse dennoch in der **ursprünglichen Reihenfolge** zurückkommen:

```raku
say (1..5).hyper.map(* * 2); # (2 4 6 8 10)
```

Das sieht genau aus wie ein gewöhnliches `map`, und das Ergebnis ist gleich; der einzige Unterschied ist, dass die Verdopplungen womöglich zugleich auf verschiedenen Kernen berechnet wurden.

`.hyper` arbeitet mit `grep` genauso — jedes Element wird parallel geprüft, und die bestandenen kommen dennoch in ihrer ursprünglichen Reihenfolge zurück:

```raku
say (1..10).hyper.grep(* %% 2); # (2 4 6 8 10)
```

Da `.hyper` die Reihenfolge bewahrt, ist es ein unmittelbarer Ersatz für ein langsames `map` oder `grep`: Nichts, was von der Reihenfolge der Ergebnisse abhängt, muss sich ändern. Der Gewinn zeigt sich erst, wenn die Arbeit je Element groß genug ist, um die Kosten der Thread-Koordination aufzuwiegen — eine Zahl zu quadrieren ist in Wirklichkeit viel zu billig, um es zu parallelisieren. Für wirklich aufwendige Arbeit je Element über eine große Liste kann `.hyper` ein langes Warten für den Preis eines einzigen Methodenaufrufs in ein kurzes verwandeln.

Eines ist zu bedenken: Ob die Arbeit *tatsächlich* über Kerne verteilt wird, entscheidet der Compiler. Die Sprache legt die Ergebnisse fest — und für `.hyper` ihre ursprüngliche Reihenfolge —, verlangt aber keine wirkliche parallele Ausführung. `.hyper` und `.race` **bitten** um Parallelität, statt sie zu fordern, ein gegebener Compiler darf sie also auf einem Threadpool ausführen oder die Elemente still der Reihe nach abarbeiten. Betrachten Sie sie als Gelegenheit zur Beschleunigung, nicht als Zusicherung einer solchen.

Weil die Reihenfolge bewahrt bleibt, kommen auch Operationen richtig heraus, die *von ihr abhängen*. Hier wird jedes Wort parallel großgeschrieben, und dennoch fügen sich die Stücke in ihrer ursprünglichen Reihenfolge wieder zum Satz:

```raku
say <raku is fun>.hyper.map(*.uc).join(' '); # RAKU IS FUN
```

{% include nav.html %}
