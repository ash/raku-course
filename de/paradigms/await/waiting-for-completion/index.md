---
title: Auf die Fertigstellung warten
translations_gpt:
---

{% include menu.html %}

`await` ist der ausdrückliche Weg zu warten, aber reaktiver Code wartet auch — nur unausgesprochen. Ein `react`-Block ist erst fertig, wenn alle Supplies, die er beobachtet, fertig sind, was Ihnen dieselbe Zusicherung „alles ist erledigt“ gibt:

```raku
my @values;

react {
    whenever Supply.from-list(2, 4, 6) {
        @values.push($_);
    }
}

say [+] @values; # 12
```

Das `say` läuft erst, **nachdem** der react-Block fertig ist, `@values` enthält also bereits jeden ausgesandten Wert. Im Grunde hat der `react`-Block den Strom für Sie abgewartet.

Das ist ein nützliches Vorgehen: Verwenden Sie einen `react`-Block, um alles zu sammeln, was ein Supply aussendet, und arbeiten Sie dann in der nächsten Zeile mit dem Gesammelten, in der Gewissheit, dass der Strom vollständig ist. Ob Sie mit `await` auf ein Promise oder mit `react` auf einen Strom warten, das Grundmuster ist dasselbe — anhalten, bis die nebenläufige Arbeit fertig ist, und dann mit ihren Ergebnissen weitermachen.

{% include nav.html %}
