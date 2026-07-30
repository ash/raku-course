---
title: Positionale Captures
translations_gpt:
---

{% include menu.html %}

Setzen Sie einen Teil des Musters in runde Klammern `( )`, um ihn zu _capturen_. Nach einem erfolgreichen Treffer steht jedes gecapturte Stück als `$0`, `$1` und so weiter zur Verfügung, ab null in der Reihenfolge nummeriert, in der die Klammern öffnen:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $0; # ｢2025｣
    say $1; # ｢06｣
}
```

Das erste Klammerpaar hat das Jahr in `$0` gecapturt, das zweite den Monat in `$1`. Der Text dazwischen — das wörtliche `-` — wird getroffen, aber nicht gecapturt.

Jedes Capture ist selbst ein kleines Match-Objekt, Sie können es also nach seinem `.Str`, seiner Position und so weiter fragen. In einer Zeichenkette mit doppelten Anführungszeichen wird ein Capture als sein getroffener Text interpoliert:

```raku
if 'hello world' ~~ / (\w+) ' ' (\w+) / {
    say "$1 $0"; # world hello
}
```

Hier werden die beiden gecapturten Wörter in umgekehrter Reihenfolge ausgegeben, was sie vertauscht.

Die Captures liegen außerdem in der Match-Variablen `$/`, und `$0` ist in Wahrheit eine Kurzform für `$/[0]`. Sie können unmittelbar über `$/` arbeiten:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $/[0];    # ｢2025｣
    say $/[1];    # ｢06｣
    say $/.elems; # 2
}
```

`$/` ist das ganze Match-Objekt, das Indizieren erreicht die positionalen Captures, und `.elems` sagt Ihnen, wie viele es sind.

{% include nav.html %}
