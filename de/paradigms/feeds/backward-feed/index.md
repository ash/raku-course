---
title: Der rückwärtige Feed
translations_gpt:
---

{% include menu.html %}

Jeder Feed bisher floss mit `==>` vorwärts, von einer Quelle links in ein Ziel rechts. Raku hat auch den gespiegelten Operator, `<==`, den **rückwärtigen Feed**. Er läuft andersherum: Das Ziel steht **links**, und die Daten werden von der Quelle **rechts** hereingezogen.

Hier ist die Pipeline mit den geraden Zahlen von zuvor, rückwärts geschrieben:

```raku
my @evens <== grep(* %% 2) <== (1..10);
say @evens; # [2 4 6 8 10]
```

Lesen Sie es von rechts nach links: nimm `1..10`, behalte die geraden Zahlen und sammle sie in `@evens`. Das Ergebnis ist genau dasselbe wie bei `(1..10) ==> grep(* %% 2) ==> my @evens` — nur die Richtung, in der Sie die Stufen schreiben, hat sich geändert.

Rückwärtige Feeds reihen sich genauso aneinander, und wieder steht das Ziel voran:

```raku
my @result <== map(* ** 2) <== grep(* %% 2) <== (1..10);
say @result; # [4 16 36 64 100]
```

Die Arbeit geschieht weiterhin quellenzuerst — beginne mit `1..10`, behalte die geraden, quadriere sie —, doch auf dem Papier sind die Stufen vom Ziel zurück zum Ursprung aufgeführt. Die Reihenfolge der Elemente bleibt unberührt; `<==` ändert nur die Leserichtung, niemals die Daten.

Da Code gewöhnlich von links nach rechts gelesen wird, liest sich das vorwärtige `==>` meist natürlicher: Sie begegnen zuerst den Daten und folgen ihnen dorthin, wo sie landen. Das rückwärtige `<==` gibt es für die Gelegenheiten, bei denen das Ziel voranzustellen die Geschichte besser erzählt — erst benennen, *was Sie bauen*, dann *woraus es gebaut ist*. Die beiden sind genaue Spiegelbilder, wählen Sie also die Richtung, die sich am besten liest.

{% include nav.html %}
