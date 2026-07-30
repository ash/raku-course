---
title: Grammatiken sind Klassen
translations_gpt:
---

{% include menu.html %}

Wenn Sie `grammar` schreiben, erzeugt Raku etwas, das einer Klasse sehr nahekommt. Die Tokens sind Methoden darauf, und die ganze Maschinerie der [Vererbung](/de/oop/inheritance) aus dem Teil über Objekte gilt. Eine Grammatik kann eine andere also mit `is` erweitern, genau wie eine Unterklasse:

```raku
grammar Base {
    token TOP      { <greeting> }
    token greeting { 'hi' }
}

grammar Loud is Base {
    token greeting { 'HI' }
}

say Loud.parse('HI').defined; # True
say Base.parse('hi').defined; # True
```

`Loud` erbt `TOP` von `Base`, liefert aber ein eigenes `greeting`. Wenn `Loud` zerlegt, ruft ihr `TOP` `<greeting>` auf, und es wird das überschreibende Token in `Loud` verwendet — genau so, wie eine überschriebene Methode auf Objekten wirkt.

Das macht Grammatiken kombinierbar. Sie können eine allgemeine Grammatik für ein Format schreiben und dann eine besondere Fassung ableiten, die nur die abweichenden Tokens ändert, ohne den Rest zu kopieren.

Selbst das `.parse`, das Sie ständig aufrufen, kommt aus diesem Klassenwesen: Jede Grammatik erbt selbsttätig von einem eingebauten Basistyp namens `Grammar`, der `.parse` liefert (und dessen Verwandten für Teiltreffer, `.subparse`). Sie schreiben es nie selbst — Sie bekommen es umsonst, genau wie eine gewöhnliche Klasse Methoden von ihrem Elternteil erbt.

{% include nav.html %}
