---
title: Lexikalischer Geltungsbereich
---

{% include menu.html %}

Ein Codeblock erstellt einen sogenannten lexikalischen Geltungsbereich. Variablen, die im aktuellen Block deklariert werden, sind innerhalb dieses Blocks sichtbar, aber nicht mehr, nachdem das Programm den Block verlassen hat. Betrachten Sie ein Beispiel:

```raku
{
    my $x = 42;
    say $x;
}

say $x;
```

Die Variable `$x` wird im Codeblock erstellt. Der erste Aufruf von `say $x` gibt den Wert der Variablen aus, da sie innerhalb des Blocks sichtbar ist. Der zweite `say $x` schlägt fehl, weil der Name `$x` außerhalb des Blocks nicht existiert und nach dessen Ende nicht bekannt ist. Das Programm kompiliert nicht und es wird ein Fehler angezeigt:

    ===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
    Variable '$x' is not declared
    at /Users/ash/raku-course/t.raku:6
    ------> say ⏏$x;

{% include nav.html %}