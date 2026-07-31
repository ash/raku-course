---
title: Spazi significativi
translations_gpt:
---

{% include menu.html %}

Dentro un regex gli spazi vengono normalmente ignorati: sono lì solo per rendere leggibile lo schema. È per questo che `/foo bar/` riconosce `foobar`. A volte però vuoi davvero che uno spazio nello schema significhi «qui c'è dello spazio bianco». L'avverbio `:s` (abbreviazione di `:sigspace`, «spazio significativo») fa esattamente questo:

```raku
say so 'foo    bar' ~~ /:s foo bar/; # True
say so 'foobar'     ~~ /:s foo bar/; # False
```

Con `:s`, lo spazio fra `foo` e `bar` nello schema richiede dello spazio bianco fra le due parole nella stringa. Uno o più spazi (o tabulazioni) valgono tutti, quindi la sequenza di spazi in `'foo    bar'` corrisponde.

Gli spazi significativi diventano particolarmente importanti con le grammatiche, dove ti permettono di scrivere schemi che si leggono come il linguaggio che stai analizzando. Li incontrerai di nuovo come differenza fra un `token` e una `rule`.

{% include nav.html %}
