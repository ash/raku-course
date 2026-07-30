---
title: 'Quiz — react'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my @got;

react {
    whenever Supply.from-list(1, 2, 3, 4, 5) {
        @got.push($_);
        done if $_ == 3;
    }
}

say @got;
```

{:.quiz}
1 | [1 2 3]
0 | [1 2 3 4 5]
0 | [3]
0 | [4 5]

{% include quiz.html %}

<div class="extended-explanation">

Der `whenever`-Rumpf sammelt jeden Wert, ruft aber `done` auf, sobald er `3` sieht. `done` schließt den `react`-Block, das Supply wird also aufgegeben, und `4` und `5` werden nie verarbeitet, sodass `[1 2 3]` bleibt.

</div>

{% include nav.html %}
