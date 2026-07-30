---
title: Dynamische Variablen
---

{% include menu.html %}

Eine _dynamische_ Variable hat das `*`-Twigil. Anders als eine lexikalische Variable, die nur in dem Block sichtbar ist, in dem sie deklariert wurde, wird eine dynamische Variable gefunden, indem **nach außen durch den Aufrufstapel** geschaut wird — durch denjenigen, der den aktuellen Code aufgerufen hat, unabhängig davon, wo dieser Code definiert ist.

```raku
my $*greeting = 'Hello';

sub greet {
    say $*greeting;
}

greet(); # Hello
```

Die Subroutine `greet` deklariert `$*greeting` nicht und empfängt es nicht als Argument, kann es aber trotzdem sehen, weil die Variable dynamisch ist und `greet` von einer Stelle aufgerufen wurde, an der sie im Geltungsbereich liegt.

Dieses Beispiel würde auch mit einer einfachen globalen Skalarvariablen `$greeting` funktionieren, aber die Natur dynamischer Variablen zeigt sich im nächsten Beispiel.

Da die Auflösung dem Aufrufstapel folgt, **überschreibt** eine nähere Deklaration eine weiter entfernte für die Dauer ihres Blocks:

```raku
my $*level = 'outer';

sub show {
    say $*level;
}

show(); # outer

{
    my $*level = 'inner';
    show(); # inner
}
```

Dieselbe `show`-Funktion gibt beim ersten Mal `outer` aus und `inner`, wenn sie aus dem Block heraus aufgerufen wird, der `$*level` neu deklariert hat. Das ist _dynamisches Scoping_, und so funktionieren Rakus eingebaute Variablen `$*OUT`, `$*IN` und `$*ERR` — du kannst die Ausgabe vorübergehend umleiten, indem du `$*OUT` in einem Block neu deklarierst, und jede Routine, die du darin aufrufst, sieht den neuen Wert. Dynamische Variablen sind ideal für Kontext, der in aufgerufenen Code fließen soll, ohne als explizites Argument übergeben zu werden.

{% include nav.html %}
