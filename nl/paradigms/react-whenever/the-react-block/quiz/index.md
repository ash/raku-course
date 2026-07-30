---
title: 'Quiz — react'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De `whenever`-body verzamelt elke waarde, maar roept `done` aan zodra ze `3` ziet. `done` sluit het `react`-blok, dus wordt de supply opgegeven en worden `4` en `5` nooit verwerkt, wat `[1 2 3]` overlaat.

</div>

{% include nav.html %}
