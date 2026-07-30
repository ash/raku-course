---
title: Captures in der Ersetzung
translations_gpt:
---

{% include menu.html %}

Der Ersatzteil von `s///` kann sich auf die Captures beziehen, die das Muster gemacht hat. So können Sie den getroffenen Text umstellen, statt ihn einfach wegzuwerfen.

Machen Sie etwa aus einem als `Jahr-Monat` geschriebenen Datum ein `Monat/Jahr`, indem Sie beide Zahlen capturen und in der anderen Reihenfolge wieder einsetzen:

```raku
my $d = '2025-06';
$d ~~ s/ (\d+) '-' (\d+) /$1\/$0/;
say $d; # 06/2025
```

Das Muster capturt das Jahr in `$0` und den Monat in `$1`. In der Ersetzung stehen `$1` und `$0` in umgekehrter Reihenfolge, mit einem Schrägstrich dazwischen. (Der Schrägstrich ist als `\/` maskiert, damit er nicht für das Ende der Ersetzung gehalten wird.) Beachten Sie, dass Leerzeichen auf der **Muster**seite unbedeutend sind, auf der **Ersatz**seite aber wörtlich, die Ersetzung ist also ohne umgebende Leerzeichen geschrieben.

Benannte Captures funktionieren genauso. Das lässt eine Ersetzung auch dann klar lesen, wenn es mehrere Teile gibt:

```raku
my $name = 'Doe, Jane';
$name ~~ s/ $<last>=(\w+) ', ' $<first>=(\w+) /$<first> $<last>/;
say $name; # Jane Doe
```

{% include nav.html %}
