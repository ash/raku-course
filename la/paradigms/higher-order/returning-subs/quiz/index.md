---
title: Quiz — Functiones ordinis superioris
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
sub prefixer($p) {
    sub ($s) { $p ~ $s };
}

my &hi = prefixer('Hi, ');
say hi('Bob');
```

{:.quiz}
1 | Hi, Bob
0 | Bob
0 | Hi, 
0 | Hi, Hi, 

{% include quiz.html %}

<div class="extended-explanation">

`prefixer('Hi, ')` subprogramma reddit quod praefixum meminit et illud ei quod datur praeponit. In `&hi` servatum et cum `'Bob'` vocatum, `Hi, Bob` reddit — subprogramma redditum cum catenis tam bene operatur quam cum numeris.

</div>

{% include nav.html %}
