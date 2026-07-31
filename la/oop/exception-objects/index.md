---
title: Obiecta exceptionum
translations_gpt:
---

{% include menu.html %}

Exceptio obiectum est, sicut quodlibet aliud in Raku. Cum `die 'something failed'` scribis, Raku nuntium tuum in obiectum exceptionis generis `X::AdHoc` involvit.

Intra `CATCH` illud obiectum inspicere potes. Genus eius ex `.^name` venit, et textus eius ex `.message`:

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

Genus nosse tibi permittit diversos errores diverse tractare. Exceptiones in Raku inbuiltae genera propria habent, quorum nomina ab `X::` incipiunt, et in eis per `when` comparare potes, sicut valores in clausula `given`/`when` comparasti:

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

Hoc `an ad-hoc error: something failed` imprimit, quia exceptio generi `X::AdHoc` convenit. In genere comparare fundamentum est certos errores tractandi — idea super quam sectio de [exceptionibus propriis](/la/oop/custom-exceptions) aedificat.

{% include nav.html %}
