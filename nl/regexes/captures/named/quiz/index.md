---
title: 'Quiz — Captures'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De gulzige `\w+` matcht zoveel woordtekens als ze kan terwijl ze nog minstens één cijfer voor `\d+` overlaat. Ze neemt `ab1`, en `\d+` matcht daarna het enige overgebleven cijfer `2`. Dus `$0` is `ab1` en `$1` is `2`.

</div>

{% include nav.html %}
