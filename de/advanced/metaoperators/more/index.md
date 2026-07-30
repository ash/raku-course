---
title: Kreuz-, Hyper- und negierte Operatoren
translations_gpt:
---

{% include menu.html %}

Neben Reduktion und Zip hat Raku mehrere weitere Meta-Operatoren. Drei davon sind hier wissenswert.

## Kreuz — `X`

Der Kreuz-Meta-Operator `X` paart **jedes** Element einer Liste mit **jedem** Element einer anderen — das kartesische Produkt:

```raku
say <a b> X <1 2>; # ((a 1) (a 2) (b 1) (b 2))
```

Wie Zip kann er einen Operator umhüllen, um auf jedes Paar einzuwirken. `X~` verbindet jedes Paar zu einer Zeichenkette, und `X*` multipliziert:

```raku
say <a b> X~ <1 2>;         # (a1 a2 b1 b2)
say (1, 2, 3) X* (10, 100); # (10 100 20 200 30 300)
```

Während Zip zwei Listen im Gleichschritt durchläuft, kombiniert Kreuz sie auf jede mögliche Weise.

## Hyper — `»…«`

Ein Hyper-Meta-Operator wendet einen Operator auf **jedes Element** einer Liste an. Der Operator wird in die spitzen `»…«` (oder die ASCII-Variante `>>…<<`) eingehüllt. Mit zwei Listen arbeitet er elementweise, wie Zip; mit einem einzelnen Wert auf einer Seite wird dieser Wert über die gesamte Liste gestreckt:

```raku
say (1, 2, 3) »+» (10, 20, 30); # (11 22 33)
say (1, 2, 3) »*» 2;            # (2 4 6)
```

Die beiden Pfeile müssen nicht in die gleiche Richtung zeigen, und ihre Richtung bestimmt, was passiert, wenn die Listen unterschiedlich lang sind — eine Spitze, die **auf** eine Liste zeigt, lässt diese Liste wiederholt werden, um zur anderen zu passen. In der ASCII-Schreibweise `<<`/`>>` sind die vier Kombinationen:

* `>>op<<` — keine Seite wird gestreckt; die Listen müssen bereits gleich lang sein, sonst ist es ein Fehler;
* `>>op>>` — die **rechte** Liste wird wiederholt, um zur linken zu passen;
* `<<op<<` — die **linke** Liste wird wiederholt, um zur rechten zu passen;
* `<<op>>` — die **kürzere** Liste wird wiederholt, um zur längeren zu passen.

```raku
say (1, 2, 3, 4) <<+>> (10, 20); # (11 22 13 24)  — 10, 20 repeats to 10, 20, 10, 20
```

Es gibt auch eine unäre Form, die eine Methode auf jedes Element aufruft. `>>.uc` wandelt jede Zeichenkette in Großbuchstaben um:

```raku
say <raku perl>>>.uc; # (RAKU PERL)
```

Hyper-Operationen signalisieren auch, dass die Arbeit *möglicherweise parallel* ausgeführt werden kann — Sie werden die verwandte `.hyper`-Methode später im [Abschnitt über nebenläufige Programmierung](/de/paradigms/hyper-race) kennenlernen.

## Negiert — `!`

Ein `!` vor einem Vergleichsoperator negiert dessen Ergebnis. Das vertraute `!=` (ungleich) ist genau dieser Meta-Operator, angewendet auf `==`, und dasselbe funktioniert für andere boolesche Operatoren wie `eq` und `%%`:

```raku
say 3 != 4;      # True
say 'a' !eq 'b'; # True  — nicht gleich als Zeichenketten
say 5 !%% 2;     # True  — 5 ist nicht teilbar durch 2
```

Kurz gesagt: `$a !op $b` ist nur eine sauberere Schreibweise von `!($a op $b)`.

Das ist Absicht. Im Gegensatz zu einer bewusst minimalistischen Sprache wie Esperanto, die einen einzigen regelmäßigen Weg anstrebt, jede Sache auszudrücken, bietet Raku Ihnen gerne mehrere — so lebt das negierte `!eq` direkt neben dem dedizierten `ne`-Operator, und beide bedeuten genau dasselbe:

```raku
say 'a' ne 'b'; # True — derselbe Test wie 'a' !eq 'b'
```

{% include nav.html %}
