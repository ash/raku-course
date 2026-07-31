---
title: Quiz — Capturae
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
if 'ab12cd' ~~ / (\w+) (\d+) / {
    say "$0 $1";
}
```

{:.quiz}
0 | ab 12
1 | ab1 2
0 | ab12 cd
0 | 12 ab

{% include quiz.html %}

<div class="extended-explanation">

Avidum `\w+` characteres verbi tam longe congruit quam potest dum saltem unam cifram pro `\d+` relinquit. `ab1` capit, et `\d+` deinde unam cifram reliquam `2` congruit. Itaque `$0` est `ab1` et `$1` est `2`.

</div>

{% include nav.html %}
