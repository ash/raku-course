---
title: Ausnahmeobjekte
translations_gpt:
---

{% include menu.html %}

Eine Ausnahme ist ein Objekt wie jedes andere in Raku. Wenn Sie `die 'something failed'` schreiben, verpackt Raku Ihre Meldung in ein Ausnahmeobjekt vom Typ `X::AdHoc`.

Innerhalb eines `CATCH` können Sie dieses Objekt untersuchen. Seinen Typ liefert `.^name`, seinen Text `.message`:

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

Den Typ zu kennen erlaubt es, verschiedene Fehler verschieden zu behandeln. Rakus eingebaute Ausnahmen haben eigene Typen, deren Namen mit `X::` beginnen, und Sie können mit `when` darauf prüfen, genau wie Sie Werte in einem `given`/`when`-Block geprüft haben:

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

Das gibt `an ad-hoc error: something failed` aus, weil die Ausnahme auf den Typ `X::AdHoc` passte. Auf den Typ zu prüfen ist die Grundlage für die Behandlung bestimmter Fehler — die Idee, auf der der Abschnitt über [eigene Ausnahmen](/de/oop/custom-exceptions) aufbaut.

{% include nav.html %}
