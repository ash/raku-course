---
title: Quiz — Capturae positionales
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
if 'ab-cd' ~~ / (\w+) '-' (\w+) / {
    say $1;
}
```

{:.quiz}
0 | ｢ab｣
1 | ｢cd｣
0 | ｢ab-cd｣
0 | ｢-｣

{% include quiz.html %}

<div class="extended-explanation">

Duo uncorum paria in `$0` et `$1` capiunt, a nulla numerata. Primum `ab` capit, secundum `cd`, itaque `$1` est `｢cd｣`.

</div>

{% include nav.html %}
