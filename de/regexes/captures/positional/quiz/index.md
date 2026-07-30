---
title: 'Quiz — Positionale Captures'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Die beiden Klammerpaare capturen in `$0` und `$1`, ab null nummeriert. Das erste capturt `ab`, das zweite capturt `cd`, `$1` ist also `｢cd｣`.

</div>

{% include nav.html %}
