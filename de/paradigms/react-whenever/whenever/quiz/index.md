---
title: 'Quiz — whenever'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_ * 2);
    }
}

say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [2 4 6]
0 | [6]
0 | 12

{% include quiz.html %}

<div class="extended-explanation">

Der `whenever`-Rumpf läuft für jeden Wert und legt das Doppelte hinein. Das Supply sendet `1, 2, 3` aus, `@out` sammelt also `2, 4, 6`.

</div>

{% include nav.html %}
