---
title: Voorwaardelijke controles met if
---

{% include menu.html %}

De `if` voorwaardelijke controle test een conditie en als deze `True` is, voert het een blok code uit.

```raku
if 10 > 4 {
    say 'Wiskunde werkt!';
}
```

Merk op dat je de conditie niet tussen haakjes hoeft te plaatsen (maar het kan als je dat wilt).

Natuurlijk zijn variabelen meer dan welkom in de tests:

```raku
my $flag = False;
if $flag {
    # . . . doe iets
}
```

In het geval dat meer dan één controle dezelfde variabele gebruikt, is het mogelijk om gekoppelde vergelijkingen te gebruiken:

```raku
my $x = 42;
if 40 < $x < 45 {
    say "Correct antwoord $x is gegeven.";
}
```

Als de conditie niet wordt voldaan, wordt het bijbehorende codeblok niet uitgevoerd en gaat de programmastructuur verder.

```raku
say 'Begin';
if False {
    say 'Dit wordt nooit afgedrukt.';
}
say 'Einde';
```

Dit programma print alleen `Begin` en `Einde`.

{% include nav.html %}