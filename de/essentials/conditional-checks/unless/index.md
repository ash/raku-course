---
title: Using unless
---

{% include menu.html %}

Alle Booleschen Bedingungen können leicht mit dem [`!` Operator](/de/essentials/booleans/operations#negation) negiert werden. In einigen Fällen macht jedoch eine explizite Negation den Ausdruck schwerfälliger und weniger lesbar. In diesen Fällen kann `unless` ein Freund sein.

Der `unless`-Block wird ausgeführt, wenn seine Bedingung `False` ist.

```raku
my $broken = False;

# ...Etwas kann $broken hier auf True setzen...
    
unless $broken {
    say "Keine Sorge!";
    say "Sei glücklich!";
}
```

Vergleichen Sie die beiden Varianten desselben Programms:

Mit `if` und Negation:

```raku
if !$broken { . . . }
```

Mit `unless`:

```raku
unless $broken { . . . }
```

Da Sie die Alternativen haben, können Sie immer das wählen, was sich in der aktuellen Situation besser anfühlt.

Beachten Sie, dass `unless` nicht von `else` oder `elsif`-Blöcken gefolgt werden kann. In diesem Fall bleibt nur die Verwendung von `if`.

{% include nav.html %}