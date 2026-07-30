---
title: Gruppen ohne Capture
translations_gpt:
---

{% include menu.html %}

Runde Klammern `( )` erledigen zwei Aufgaben auf einmal: Sie _gruppieren_ einen Teil des Musters und _capturen_ ihn in `$0`, `$1` und so weiter. Manchmal wollen Sie nur die erste Aufgabe — mehrere Atome als eine Einheit behandeln —, ohne dafür eine Capture-Nummer zu verbrauchen. Nehmen Sie dafür eckige Klammern `[ ]`, die **ohne** Capture gruppieren.

Das Gruppieren wird wichtig, sobald Sie einen Quantor anhängen. Ein Quantor bindet nur an das Atom unmittelbar davor, das folgende Muster wiederholt also nur den letzten Buchstaben:

```raku
say 'abccc' ~~ / abc ** 3 /; # ｢abccc｣
```

Nur das `c` wurde dreimal wiederholt. Hüllen Sie das ganze Stück in `[ ]`, um alles zu wiederholen:

```raku
say 'abcabcabc' ~~ / [ abc ] ** 3 /; # ｢abcabcabc｣
```

Nun ist `[ abc ]` eine Einheit, und `** 3` bezieht sich auf die Gruppe.

Weil `[ ]` keinen Capture-Platz belegt, bleiben die Nummern für die Teile reserviert, auf die es Ihnen wirklich ankommt. Vergleichen Sie einen schlichten Treffer aus Schlüssel und Wert:

```raku
if 'foo=42' ~~ / (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Nehmen wir an, dem Schlüssel darf ein Wort vorangehen, das Sie überspringen möchten. Gruppieren Sie dieses Präfix mit `[ ]`, damit es die Nummerierung nicht stört:

```raku
if 'the foo=42' ~~ / [ \w+ \s ]? (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Das optionale `[ \w+ \s ]?` hat `the ` getroffen, aber kein Capture beansprucht, `$0` ist also weiterhin der Schlüssel und `$1` weiterhin der Wert. Hätten Sie jenes Präfix mit `( )` geschrieben, wäre alles verrutscht: Das Präfix würde `$0`, der Schlüssel `$1` und der Wert `$2`.

Die Regel ist kurz: Nehmen Sie `( )`, wenn Sie den getroffenen Text behalten wollen, und `[ ]`, wenn Sie nur gruppieren wollen. Beide Arten nehmen Quantoren und Alternativen auf, weshalb die frühere Alternation `[ cat | dog ] house` eckige Klammern verwendet hat — sie brauchte die Gruppierung, aber kein weiteres Capture.

{% include nav.html %}
