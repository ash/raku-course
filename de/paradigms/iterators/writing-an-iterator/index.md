---
title: Einen Iterator schreiben
translations_gpt:
---

{% include menu.html %}

Ein Iterator ist schlicht ein Objekt, das die eingebaute Rolle `Iterator` erfüllt und eine Methode `pull-one` bereitstellt. Diese Methode liefert den nächsten Wert oder `IterationEnd`, wenn nichts mehr übrig ist. Hier ist ein Abwärtszähler-Iterator, der eine Zahl liefert und auf null zuschreitet:

```raku
class Countdown does Iterator {
    has Int $.n is rw;

    method pull-one {
        return IterationEnd if $!n <= 0;
        return $!n--;
    }
}
```

Jeder Aufruf von `pull-one` prüft zuerst, ob die Zählung aufgebraucht ist; wenn nicht, liefert er die aktuelle Zahl und verringert sie. Das nachgestellte `$!n--` liefert den Wert *vor* dem Abziehen, die Zahlen kommen also als `3, 2, 1` heraus. Ihn von Hand anzutreiben sieht aus wie bei jedem anderen Iterator:

```raku
my $c = Countdown.new(n => 3);
say $c.pull-one; # 3
say $c.pull-one; # 2
say $c.pull-one; # 1
say $c.pull-one =:= IterationEnd; # True
```

Ein Iterator für sich ist nichts, was eine `for`-Schleife unmittelbar aufnehmen kann — eine Schleife erwartet etwas *Iterierbares*. Hüllen Sie den Iterator in eine `Seq`, und er wird schleifenfähig:

```raku
for Seq.new(Countdown.new(n => 3)) -> $x {
    say $x;
}
```

Das gibt `3`, `2`, `1` aus. Im Alltag würden Sie stattdessen zu `gather` / `take` greifen — die [Generator](/de/paradigms/generators)form ist für dasselbe Ergebnis weit kürzer. Die Rolle `Iterator` einmal unmittelbar zu schreiben lohnt sich dennoch, denn es legt offen, worauf `gather`, `map` und jede `for`-Schleife gebaut sind: ein Objekt, das eine einzige Frage beantwortet — „was ist der nächste Wert?“

{% include nav.html %}
