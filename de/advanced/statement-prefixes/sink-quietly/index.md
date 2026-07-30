---
title: sink und quietly
---

{% include menu.html %}

Zwei weitere Präfixe befassen sich damit, Code wegen seiner Effekte statt wegen seines Werts auszuführen.

Das `sink`-Präfix wertet etwas im _Sink-Kontext_ aus — rein für seine Seiteneffekte, wobei das Ergebnis verworfen wird. Es ist nützlich bei einer lazy Operation, deren Ausführung du erzwingen möchtest:

```raku
sink (1..3).map({ print "$_ " });
print "\n"; # 1 2 3
```

Das `map` wird hier nur wegen der Ausgabe ausgeführt, die es erzeugt; `sink` stellt sicher, dass es tatsächlich ausgeführt wird, und verwirft die resultierende Liste. Ohne die Erzwingung könnte ein lazy `map`, dessen Ergebnis nie verwendet wird, möglicherweise gar nicht ausgeführt werden.

Das `quietly`-Präfix führt einen Block aus und **unterdrückt dabei Warnungen**. Code, der normalerweise eine Warnung an den Fehlerstrom ausgeben würde, bleibt still:

```raku
my $value;
quietly {
    say $value + 1; # 1, ohne "uninitialized value"-Warnung
}
```

Das Addieren von `1` zu einem undefinierten `$value` würde normalerweise vor der Verwendung eines uninitialisierten Werts warnen, aber innerhalb von `quietly` wird diese Warnung unterdrückt. Verwende es, wenn du bewusst etwas tust, das Warnungen auslöst, und den Lärm nicht möchtest — aber sparsam, denn Warnungen weisen normalerweise auf einen echten Fehler hin.

{% include nav.html %}
