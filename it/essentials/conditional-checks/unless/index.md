---
title: Using unless
---

{% include menu.html %}

Tutte le condizioni booleane possono essere facilmente negate con l'operatore [`!`](/it/essentials/booleans/operations#negation). Tuttavia, in alcuni casi, una negazione esplicita rende l'espressione più pesante e meno leggibile. In questi casi, `unless` può essere un amico.

Il blocco `unless` viene eseguito quando la sua condizione è `False`.

```raku
my $broken = False;

# ...Qualcosa può impostare $broken su True qui...
    
unless $broken {
    say "Non preoccuparti!";
    say "Sii felice!";
}
```

Confronta le due varianti dello stesso programma:

Con `if` e negazione:

```raku
if !$broken { . . . }
```

Con `unless`:

```raku
unless $broken { . . . }
```

Avendo le alternative, puoi sempre scegliere ciò che ti sembra migliore nella situazione attuale.

Nota che `unless` non può essere seguito da blocchi `else` o `elsif`. In questo caso, l'unico modo è usare `if`.

{% include nav.html %}