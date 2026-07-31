---
title: Item- und Listenkontext
---

{% include menu.html %}

Zwei weitere Kontexte entscheiden, ob etwas als eine **Liste** mehrerer Werte oder als ein einzelnes **Element** behandelt wird. Das ist der Unterschied hinter den Sigils `@` und `$`.

Im _Listenkontext_ breitet sich ein Array in seine Elemente aus. Eine `for`-Schleife setzt ihr Argument in den Listenkontext, sodass sie über jedes Element iteriert:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for @a;
say $count; # 3
```

Im _Elementkontext_ wird dasselbe Array als ein einzelner Wert behandelt. Der Kontextualisierer `$( … )` erzwingt den Elementkontext, sodass die Schleife jetzt nur eine Sache sieht und einmal durchläuft:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for $(@a);
say $count; # 1
```

Deshalb packt die Zuweisung eines Arrays an einen Skalar es als einzelnes Element ein, statt seine Elemente zu kopieren: `my $x = @a` setzt `@a` in den Elementkontext. Beachte, dass dieses einzelne Element ein weiterer Container mit vielen Elementen darin sein kann:

```raku
my @a = 1, 2, 3;

my $var = @a;
say $var;      # [1 2 3]
say $var.WHAT; # (Array)
```

Die Variable `$var` enthält jetzt ein einzelnes (da es ein Skalar-Container ist) Objekt, das ein `Array` ist. Du kannst das leicht beweisen, indem du `$x` wie eine Art Array-Referenz behandelst (wie man es in anderen Sprachen nennen würde):

```raku
say $var[1]; # 2
```

Der passende Kontextualisierer `@( … )` bewirkt das Gegenteil und erzwingt den Listenkontext.

Es gibt auch den _Sink-Kontext_ — den Kontext einer Anweisung, deren Wert verworfen wird, wie eine Zeile, die nur wegen ihres Seiteneffekts existiert. Wenn ein Wert im Sink-Kontext landet und nichts Nützliches damit zu tun ist, kann Raku vor einer "useless use" warnen, was ein hilfreicher Hinweis ist, dass du vergessen hast, ein Ergebnis zu verwenden.

Das Sigil, das du wählst (`$` versus `@`), ist eigentlich eine Wahl des Kontexts, und die Kontextualisierer `$( )` und `@( )` ermöglichen es dir, ihn bei Bedarf zu überschreiben.

{% include nav.html %}
