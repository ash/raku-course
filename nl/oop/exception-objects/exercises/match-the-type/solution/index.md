---
title: 'Oplossing: Match het type'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
{
    my $x = 1 / 0;
    say $x;

    CATCH {
        when X::Numeric::DivideByZero {
            say 'cannot divide by zero';
        }
    }
}
```

🦋 Je kunt de broncode vinden in het bestand [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Uitvoer

```
cannot divide by zero
```

## Opmerkingen

1. In Raku ontploft `1 / 0` niet meteen; het levert een luie `Failure` op. De exceptie wordt pas geworpen wanneer we de waarde *gebruiken*, hier door haar te proberen te `say`-en.

1. De geworpen exceptie is van het ingebouwde type `X::Numeric::DivideByZero`, en `when X::Numeric::DivideByZero` matcht hem precies. Op een specifiek type matchen, in plaats van alles met `default` te vangen, laat je verschillende fouten op verschillende manieren afhandelen.

{% include nav.html %}
