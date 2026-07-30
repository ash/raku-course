---
title: 'Quiz — Das Iteratorprotokoll'
translations_gpt:
---

{% include menu.html %}

Was liefert `pull-one`, wenn ein Iterator keine Werte mehr zu geben hat, und wie prüfen Sie darauf?

{:.quiz}
1 | `IterationEnd`, geprüft mit `=:=`
0 | `Nil`, geprüft mit `.defined`
0 | eine leere Liste `()`, geprüft mit `==`
0 | `0`, geprüft mit `=:=`

{% include quiz.html %}

<div class="extended-explanation">

Ein erschöpfter Iterator liefert das Wächterobjekt `IterationEnd`. Da es ein einziges gemeinsames Objekt ist, prüfen Sie mit `=:=` auf Identität (der Test auf *dasselbe Objekt*), nicht auf Wert oder Definiertheit. Eine `for`-Schleife verwendet genau diese Prüfung, um zu wissen, wann sie anhalten soll.

</div>

{% include nav.html %}
