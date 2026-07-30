---
title: Ausnahmen mit `try` fangen
translations_gpt:
---

{% include menu.html %}

Wenn in einem Raku-Programm etwas schiefgeht — eine fehlende Datei, ein ausdrückliches `die` —, wird eine _Ausnahme_ geworfen. Eine unbehandelte Ausnahme hält das Programm standardmäßig an. Der `try`-Block erlaubt es Ihnen, Code auszuführen, der fehlschlagen könnte, ohne abzustürzen.

Sie hüllen den riskanten Code in einen `try`-Block. Wird darin eine Ausnahme geworfen, endet der Block dort, das Programm läuft aber weiter:

```raku
my $result = try {
    die 'Boom!';
};

say "Still works";
```

Das `die` wird vom `try` gefangen, das Programm stürzt also nicht ab — es geht direkt zur nächsten Anweisung über und gibt aus:

```
Still works
```

Wenn der Block auf diese Weise fehlschlägt, ergibt er einen undefinierten Wert, `$result` ist also undefiniert:

```raku
say $result.defined; # False
```

Die gefangene Ausnahme wird in der besonderen Variablen `$!` abgelegt. Dort können Sie ihre Meldung lesen:

```raku
say $!.message; # Boom!
```

`try` macht aus einem fatalen Fehler also etwas, das Ihr Programm untersuchen und worauf es reagieren kann. Läuft der Block ohne Ausnahme, enthält `$result` seinen Wert, und `$!` ist undefiniert.

{% include nav.html %}
