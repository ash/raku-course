---
title: Dynamische variabelen
---

{% include menu.html %}

Een _dynamische_ variabele heeft de `*`-twigil. In tegenstelling tot een lexicale variabele, die alleen zichtbaar is in het blok waar deze is gedeclareerd, wordt een dynamische variabele gevonden door **naar buiten te zoeken via de call stack** — door wie de huidige code heeft aangeroepen, ongeacht waar die code is gedefinieerd.

```raku
my $*greeting = 'Hello';

sub greet {
    say $*greeting;
}

greet(); # Hello
```

De subroutine `greet` declareert `$*greeting` niet en ontvangt het niet als argument, maar kan het toch zien, omdat de variabele dynamisch is en `greet` werd aangeroepen vanaf een plek waar deze in scope is.

Dit voorbeeld zou ook werken met een eenvoudige globale scalar variabele `$greeting`, maar de aard van dynamische variabelen wordt zichtbaar in het volgende voorbeeld.

Omdat het opzoeken de call stack volgt, **overschrijft** een dichterbij liggende declaratie een verder weg liggende voor de duur van het blok:

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

Dezelfde `show` print `outer` de eerste keer en `inner` wanneer deze wordt aangeroepen vanuit het blok dat `$*level` opnieuw declareerde. Dit is _dynamische scoping_, en zo werken de ingebouwde `$*OUT`, `$*IN` en `$*ERR` van Raku — je kunt uitvoer tijdelijk omleiden door `$*OUT` in een blok opnieuw te declareren, en elke routine die je daarbinnen aanroept ziet de nieuwe waarde. Dynamische variabelen zijn ideaal voor context die naar aangeroepen code moet doorstromen zonder als expliciet argument te worden meegegeven.

{% include nav.html %}
