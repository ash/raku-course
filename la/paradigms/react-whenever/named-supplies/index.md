---
title: Supply extra definita
translations_gpt:
---

{% include menu.html %}

Omne `whenever` hactenus supply suum ibi in capite creavit — `whenever Supply.from-list(...)`. Hoc bene legitur pro exemplo celeri, sed programmata vera raro fontem eventuum suum exacte illo loco ad manum habent. Saepius supply alibi aedificatur — a functione redditum, a `Supplier` productum, vel tibi a foramine vel horologio traditum — et ut variabilis simplex advenit. `whenever` aeque libenter supply nominatum spectat:

```raku
my $sensors  = Supply.from-list(18, 21, 19);
my $messages = Supply.from-list('hi', 'bye');

react {
    whenever $sensors {
        say "temperature: $_";
    }
    whenever $messages {
        say "message: $_";
    }
}
```

Hoc imprimit:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

Itaque lege `whenever $sensors { … }` ut «quandocumque supply `$sensors` — undecumque venit — valorem emittit, curre hoc corpus». `whenever Supply.from-list(...)` in loco quod ante vidisti mere casus specialis est ubi fons forte ibidem creatur.

Si haec forma bloci externi cum blocis internis aliquid tibi in memoriam revocat, recte sentis — [pagina sequens](/la/paradigms/react-whenever/whenever-vs-when) illam cum `given`/`when` comparat.

{% include nav.html %}
