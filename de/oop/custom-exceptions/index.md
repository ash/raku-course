---
title: Eigene Ausnahmen
translations_gpt:
---

{% include menu.html %}

Neben den eingebauten `X::`-Ausnahmen können Sie eigene definieren. Eine eigene Ausnahme ist eine Klasse, die von der eingebauten Klasse `Exception` erbt und eine Methode `message` bereitstellt:

```raku
class TooBig is Exception {
    has $.value;

    method message {
        "Value $.value is too big";
    }
}
```

`TooBig` ist eine gewöhnliche Klasse — sie kann Attribute wie `value` haben —, aber weil sie `is Exception` ist, kann sie geworfen werden. Sie werfen sie, indem Sie ein Objekt erzeugen und darauf `.throw` aufrufen:

```raku
my $value = 20 * 30;

TooBig.new(value => $value).throw if $value > 50;

CATCH {
    when TooBig {
        say .message;
    }
}
```

Das Programm gibt aus:

```
Value 600 is too big
```

Innerhalb des `CATCH` trifft `when TooBig` zu, weil das geworfene Objekt von diesem Typ ist. Eine eigene Ausnahme trägt beliebige Daten mit sich, die Sie ihr mitgeben (hier den `value`), sodass die Behandlung eine genaue Meldung aufbauen oder gezielt reagieren kann — weit nützlicher als eine schlichte, an `die` übergebene Zeichenkette.

Damit fügt sich alles aus diesem Teil zusammen: Eine eigene Ausnahme ist eine _Klasse_ (mit Attributen und einer Methode), die an der Ausnahmemaschinerie teilnimmt und bereitsteht, genau zu melden, was schiefging.

{% include nav.html %}
