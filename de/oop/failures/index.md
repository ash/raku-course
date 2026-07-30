---
title: Weiche Fehlschläge
translations_gpt:
---

{% include menu.html %}

Eine Ausnahme mit `die` zu werfen hält sofort alles an. Manchmal ist das zu drastisch: Sie möchten, dass eine Subroutine meldet, dass sie kein Ergebnis liefern konnte, die Entscheidung über die Schwere aber dem Aufrufer überlassen. Dafür hat Raku _weiche Fehlschläge_, erzeugt mit `fail`.

Wenn eine Subroutine `fail` aufruft, wirft sie nicht sofort. Stattdessen liefert sie dem Aufrufer ein besonderes `Failure`-Objekt. Ein `Failure` ist undefiniert, der Aufrufer kann also in aller Ruhe darauf prüfen:

```raku
sub divide($a, $b) {
    fail 'cannot divide by zero' if $b == 0;
    return $a / $b;
}

say divide(10, 2);         # 5
say divide(10, 0).defined; # False
```

Der erfolgreiche Aufruf liefert `5`. Der fehlschlagende Aufruf liefert ein `Failure`, das für `defined` `False` meldet, sodass der Aufrufer das Ergebnis prüfen kann, bevor er es verwendet.

Ein `Failure` heißt _weich_, weil es sich erst dann in eine echte, geworfene Ausnahme verwandelt, wenn Sie versuchen, es als Wert zu verwenden, ohne es zuvor zu prüfen. Solange Sie es behandeln — etwa indem Sie `defined` testen —, bleibt es still. So kann eine Subroutine ein Problem melden, ohne das ganze Programm zum Anhalten zu zwingen.

## Das haben Sie schon einmal gesehen

Dieser aufgeschobene Stil des Fehlschlagens ist nicht auf `fail` beschränkt. Früher in diesem Teil ist Ihnen dieselbe Idee zweimal begegnet.

Eine **Division durch null** erzeugt still einen Wert und wirft erst, wenn Sie ihn tatsächlich verwenden:

```raku
my $x = 1 / 0;   # no error yet
say $x;           # throws only here, when the value is used
```

Ein **fehlschlagendes externes Programm** liefert ein `Proc`, das nur wirft, wenn Sie es unbehandelt verwerfen — bewahren Sie es auf und sehen Sie es sich an, bleibt es ein stiller Wert:

```raku
run 'sh', '-c', 'exit 1';   # the failing Proc is discarded, so this throws
```

In jedem Fall hält ein Problem das Programm nicht in dem Moment an, in dem es auftritt: Es wird zu einem Wert, den Sie prüfen können, und eskaliert erst dann zu einer geworfenen Ausnahme, wenn Sie ihn ungeprüft verwenden oder ignorieren. Das Thema [Nicht jeder Fehler tritt sofort auf](/de/oop/try/deferred-errors) stellt diese beiden nebeneinander.

{% include nav.html %}
