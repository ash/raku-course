---
title: Quiz — react
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Corpus `whenever` unumquemque valorem colligit, sed `done` vocat simul atque `3` videt. `done` blocum `react` claudit, itaque supply relinquitur et `4` et `5` numquam tractantur, `[1 2 3]` relinquens.

</div>

{% include nav.html %}
