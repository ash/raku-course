---
title: Kvizo — react
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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

La korpo `whenever` kolektas ĉiun valoron, sed vokas `done` tuj kiam ĝi vidas `3`. `done` fermas la blokon `react`, do la supply estas forlasata kaj `4` kaj `5` neniam estas traktataj, lasante `[1 2 3]`.

</div>

{% include nav.html %}
