---
title: Lexical scope
---

{% include menu.html %}

Een codeblok creëert een zogenaamde lexicale scope. Variabelen die in het huidige blok worden gedeclareerd, zijn binnen dat blok zichtbaar, maar niet nadat het programma het blok verlaat. Overweeg een voorbeeld:

```raku
{
    my $x = 42;
    say $x;
}

say $x;
```

De variabele `$x` wordt in het codeblok gecreëerd. De eerste aanroep van `say $x` drukt de waarde van de variabele af omdat deze binnen het blok zichtbaar is. De tweede `say $x` faalt omdat de naam `$x` buiten het blok niet bestaat en niet bekend is nadat het blok is geëindigd. Het programma compileert niet en je krijgt een foutmelding:

    ===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
    Variable '$x' is not declared
    at /Users/ash/raku-course/t.raku:6
    ------> say ⏏$x;

{% include nav.html %}