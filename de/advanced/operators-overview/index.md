---
title: Überblick über Operatorverhalten
translations_gpt:
---

{% include menu.html %}

Wenn ein Ausdruck mehrere Operatoren enthält, muss Raku entscheiden, in welcher Reihenfolge sie angewendet werden. Zwei Regeln bestimmen dies: _Vorrang_ und _Assoziativität_.

## Vorrang

Der Vorrang entscheidet, welcher Operator stärker bindet. Die Multiplikation hat einen höheren Vorrang als die Addition, daher wird sie zuerst ausgeführt:

```raku
say 2 + 3 * 4; # 14
```

Der Ausdruck wird als `2 + (3 * 4)` gelesen, was `14` ergibt und nicht `20`. Sie können immer Klammern verwenden, um eine andere Reihenfolge zu erzwingen:

```raku
say (2 + 3) * 4; # 20
```

## Assoziativität

Die Assoziativität bestimmt die Reihenfolge zwischen Operatoren mit _gleichem_ Vorrang. Die Subtraktion ist linksassoziativ, sie gruppiert also von links:

```raku
say 8 - 3 - 2; # 3
```

Das ist `(8 - 3) - 2`, also `3`. Die Potenzierung hingegen ist rechtsassoziativ:

```raku
say 2 ** 3 ** 2; # 512
```

Hier gruppiert sich der Ausdruck als `2 ** (3 ** 2)`, also `2 ** 9`, was `512` ergibt.

## Verkettete Vergleiche

Vergleichsoperatoren können _verkettet_ werden, was sich natürlich liest und das erwartete mathematische Ergebnis liefert:

```raku
say 1 < 2 < 3; # True
say 1 < 5 < 3; # False
```

Der mittlere Wert wird mit beiden Nachbarn verglichen: `1 < 2 < 3` ist wahr, weil sowohl `1 < 2` als auch `2 < 3` wahr sind.

{% include nav.html %}
