---
title: 'Quiz — whenever en done'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_);
        done if $_ == 2;
    }
    whenever Supply.from-list(10, 20) {
        @out.push($_);
    }
}

say @out;
```

{:.quiz}
1 | [1 2]
0 | [1 2 10 20]
0 | [1 2 3 10 20]
0 | [10 20]

{% include quiz.html %}

<div class="extended-explanation">

De eerste `whenever` duwt `1` erin, dan `2` — en bij `2` roept hij `done` aan. Het cruciale punt is dat `done` het **hele `react`-blok** beëindigt en niet alleen zijn eigen `whenever`: de rest van de eerste supply (`3`) en de *hele tweede supply* (`10, 20`) worden afgesneden voordat ze afgeleverd worden. Dus `@out` bevat alleen `[1 2]`. Als `done` alleen zijn eigen stroom stil zou leggen, had je `[1 2 10 20]` gezien — maar één `done` legt alle reacties tegelijk stil.

</div>

{% include nav.html %}
