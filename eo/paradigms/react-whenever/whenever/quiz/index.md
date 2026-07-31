---
title: Kvizo — whenever
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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

La korpo `whenever` plenumiĝas por ĉiu valoro, puŝante ĝian duoblon. La supply eligas `1, 2, 3`, do `@out` kolektas `2, 4, 6`.

</div>

{% include nav.html %}
