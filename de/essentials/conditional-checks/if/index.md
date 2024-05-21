---
title: Bedingte Überprüfungen mit if
---

{% include menu.html %}

Die `if`-Bedingungsprüfung testet eine Bedingung und führt, wenn sie `True` ist, einen Codeblock aus.

```raku
if 10 > 4 {
    say 'Mathematik funktioniert!';
}
```

Beachten Sie, dass Sie die Bedingung nicht in Klammern setzen müssen (aber Sie können es, wenn Sie möchten).

Natürlich sind Variablen in den Tests mehr als willkommen:

```raku
my $flag = False;
if $flag {
    # . . . etwas tun
}
```

Falls mehr als eine Überprüfung dieselbe Variable verwendet, ist es möglich, verkettete Vergleiche zu verwenden:

```raku
my $x = 42;
if 40 < $x < 45 {
    say "Die richtige Antwort $x wurde gegeben.";
}
```

Wenn die Bedingung nicht erfüllt ist, wird der zugehörige Codeblock nicht ausgeführt und der Programmfluss geht weiter.

```raku
say 'Begin';
if False {
    say 'Dies wird nie gedruckt.';
}
say 'Ende';
```

Dieses Programm druckt nur `Begin` und `Ende`.

{% include nav.html %}