---
title: 'Quiz — Positionele captures'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De twee haakjesparen capturen in `$0` en `$1`, genummerd vanaf nul. Het eerste captureert `ab`, het tweede captureert `cd`, dus `$1` is `｢cd｣`.

</div>

{% include nav.html %}
