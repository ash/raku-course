---
title: Exceptieobjecten
translations_gpt:
---

{% include menu.html %}

Een exceptie is een object, net als elk ander in Raku. Wanneer je `die 'something failed'` schrijft, verpakt Raku je melding in een exceptieobject van het type `X::AdHoc`.

Binnen een `CATCH` kun je dat object inspecteren. Zijn type komt van `.^name` en zijn tekst van `.message`:

```raku
{
    die 'something failed';

    CATCH {
        default {
            say .^name;   # X::AdHoc
            say .message; # something failed
        }
    }
}
```

Het type kennen laat je verschillende fouten verschillend behandelen. De ingebouwde excepties van Raku hebben specifieke typen waarvan de namen met `X::` beginnen, en je kunt erop matchen met `when`, precies zoals je waarden matchte in een `given`/`when`-blok:

```raku
{
    die 'something failed';

    CATCH {
        when X::AdHoc {
            say 'an ad-hoc error: ' ~ .message;
        }
        default {
            say 'some other error';
        }
    }
}
```

Dit drukt `an ad-hoc error: something failed` af, omdat de exceptie op het type `X::AdHoc` matchte. Op het type matchen is de basis voor het afhandelen van specifieke fouten — het idee waarop de sectie over [eigen excepties](/nl/oop/custom-exceptions) voortbouwt.

{% include nav.html %}
