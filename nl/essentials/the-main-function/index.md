---
title: De MAIN functie
---

{% include menu.html %}

Een Raku-programma heeft geen boilerplate-ritueel nodig, dus je kunt meteen beginnen met het schrijven van nuttige instructies. Dit deel van het programma, dat zich bevindt op het niveau boven elk [codeblok](/nl/essentials/code-blocks) (inclusief [functies](/nl/essentials/functions), bijvoorbeeld), wordt _mainline_ genoemd.

Als het programma een functie bevat met de speciale naam `MAIN`, voert Raku deze functie uit nadat het alles heeft gecompileerd en nadat de mainline-code is uitgevoerd.

```raku
say '1. Mainline code';

sub MAIN {
    say '3. MAIN called';
}

say '2. Also mainline';
```

Dit programma voert eerst de top-level `say`s uit en roept daarna `MAIN` aan:

```console
$ raku t.raku
1. Mainline code
2. Also mainline
3. MAIN called
```

Natuurlijk is het ook mogelijk om een programma te hebben met de `MAIN` functie en geen andere mainline-code.

{% include nav.html %}