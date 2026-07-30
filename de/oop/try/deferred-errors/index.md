---
title: Nicht jeder Fehler tritt sofort auf
translations_gpt:
---

{% include menu.html %}

Eine geworfene Ausnahme hält das Programm standardmäßig sofort an, und mit `try` fangen Sie sie. Doch nicht alles, was wie ein fataler Fehler aussieht, hält Ihr Programm tatsächlich in dem Moment an, in dem es geschieht. Raku kennt Fehlschläge, die still bleiben — die ihre Reaktion aufschieben, bis Sie das Ergebnis verwenden, oder die Sie untersuchen lassen und weiterlaufen. Ein paar davon sind in diesem Teil schon aufgetaucht, und es lohnt sich, sie an einer Stelle zu sammeln.

**Eine Division durch null.** Durch null zu teilen fliegt nicht dort auf, wo es geschrieben steht. Der schlechte Wert wird erzeugt und still gehalten; geworfen wird erst, wenn Sie ihn *verwenden* — etwa indem Sie ihn ausgeben oder umwandeln:

```raku
my $x = 1 / 0;    # no error here
say 'still running';
say $x;           # only now does it throw
```

Dieses aufgeschobene Verhalten und die `Failure`-Objekte dahinter sind das Thema von [Weiche Fehlschläge](/de/oop/failures).

**Ein fehlschlagendes externes Programm.** Ein von `run` oder `shell` geliefertes `Proc`, das nicht erfolgreich beendet wurde, wirft nicht, wenn es entsteht. Es wirft nur, wenn Sie es unbehandelt *verwerfen*; speichern Sie es und lesen Sie `.exitcode` (oder prüfen Sie es als Wahrheitswert), bleibt der Fehlschlag ein schlichter Wert, auf den Sie reagieren können. Das haben Sie in [Das Proc-Objekt](/de/oop/external-programs/the-proc-object) gesehen.

Der rote Faden: Ein Fehlschlag kann *aufgeschoben* werden — verwandelt in einen Wert, den Sie prüfen, wenn Sie bereit sind, statt in einen sofortigen Absturz. `try` und der `CATCH`-Phaser kümmern sich um Fehler, die sofort geworfen werden; diese Mechanismen um jene, die es nicht tun.

{% include nav.html %}
