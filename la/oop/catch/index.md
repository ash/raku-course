---
title: 'Phasor `CATCH`'
translations_gpt:
---

{% include menu.html %}

Clausula `try` commoda est, sed totam clausulam ut unum tractat: aut operatur aut non. Fasis `CATCH` tibi subtiliorem potestatem dat — permittit tibi exceptionem _intra_ clausulam ubi accidit tractare, et decernere quid agas.

`CATCH` fasis est, sicut eae quas in [sectione de ordine exsecutionis](/la/advanced/phasers) invenisti. Eam ubicumque intra clausulam scribis; currit solum si exceptio ibi iacitur. Exceptio ut thema `$_` praesto est:

```raku
{
    die 'Boom!';

    CATCH {
        default {
            say 'Caught: ' ~ .message;
        }
    }
}

say 'after';
```

Programma imprimit:

```
Caught: Boom!
after
```

Clausula `default` intra `CATCH` quamlibet exceptionem tractat. Postquam cucurrit, exceptio tractata habetur, itaque programma non sistit — exsecutio post clausulam ambientem pergit, quapropter `after` imprimitur.

Sine `CATCH`, `die` programma finivisset antequam `after` attingi posset.

{% include nav.html %}
