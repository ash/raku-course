---
title: Propraj esceptoj
translations_gpt:
---

{% include menu.html %}

Krom la enkonstruitaj esceptoj `X::`, vi povas difini viajn proprajn. Propra escepto estas klaso, kiu heredas de la enkonstruita klaso `Exception` kaj provizas metodon `message`:

```raku
class TooBig is Exception {
    has $.value;

    method message {
        "Value $.value is too big";
    }
}
```

`TooBig` estas normala klaso — ĝi povas havi atributojn kiel `value` — sed ĉar ĝi `is Exception`, ĝi povas esti ĵetata. Vi ĵetas ĝin kreante objekton kaj vokante `.throw` sur ĝi:

```raku
my $value = 20 * 30;

TooBig.new(value => $value).throw if $value > 50;

CATCH {
    when TooBig {
        say .message;
    }
}
```

La programo presas:

```
Value 600 is too big
```

Ene de la `CATCH`, `when TooBig` kongruas, ĉar la ĵetita objekto estas de tiu tipo. Propra escepto portas kiajn ajn datumojn vi donas al ĝi (ĉi tie, la `value`), do la traktilo povas konstrui precizan mesaĝon aŭ reagi laŭ specifa maniero — multe pli utile ol simpla ĉeno transdonita al `die`.

Ĉi tio kunigas ĉion en ĉi tiu parto: propra escepto estas _klaso_ (kun atributoj kaj metodo), kiu partoprenas en la escepta maŝinaro, preta signali ĝuste tion, kio misiris.

{% include nav.html %}
