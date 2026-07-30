---
title: Laziness und Eagerness
---

{% include menu.html %}

Einige Listen in Raku werden erst berechnet, wenn ihre Elemente benötigt werden — sie sind _lazy_. Die Präfixe `lazy` und `eager` ermöglichen es dir, dies explizit zu steuern.

Das `eager`-Präfix erzwingt, dass eine Liste **auf einmal** und sofort erzeugt wird:

```raku
my @squares = eager (1..3).map(* ** 2);
say @squares; # [1 4 9]
```

Ohne `eager` würde das `map` die Werte trotzdem erzeugen, aber `eager` garantiert, dass alle sofort berechnet werden und nicht erst bei Bedarf.

Das `lazy`-Präfix bewirkt das Gegenteil: Es markiert eine Liste als lazy, sodass ihre Elemente erst erzeugt werden, wenn sie abgerufen werden. Dadurch kann eine Liste konzeptionell unendlich sein:

```raku
my $numbers = lazy (1 .. Inf);
say $numbers.is-lazy; # True
```

Die Methode `.is-lazy` bestätigt, dass die Liste nicht versuchen wird, alle ihre (endlosen) Elemente im Voraus zu berechnen.

Dieses spezielle Beispiel ist genau ein Fall, in dem Raku ohnehin Laziness annehmen würde: Ein unbegrenzter Bereich wie `1 .. Inf` ist bereits lazy, daher gibt `say (1 .. Inf).is-lazy` auch ohne das Präfix `True` aus. Das Schreiben von `lazy` ändert hier nichts — es macht die Absicht nur explizit. Das Präfix ist dann nützlich, wenn du eine Liste lazy machen möchtest, die sonst eager berechnet würde.

In den meisten Fällen wählt Raku von sich aus vernünftig — Bereiche und Sequenzen sind lazy, gewöhnliche Array-Zuweisungen sind eager. Greife auf diese Präfixe zurück, wenn du diese Wahl überschreiben musst: `eager`, um eine aufwendige Berechnung sofort zu erzwingen, `lazy`, um eine aufzuschieben, die groß oder unbegrenzt sein könnte.

{% include nav.html %}
