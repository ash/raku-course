---
title: Kvizo — whenever kaj done
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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

La unua `whenever` puŝas `1`, poste `2` — kaj ĉe `2` ĝi vokas `done`. La decida punkto estas, ke `done` finas la **tutan blokon `react`**, ne nur sian propran `whenever`: la cetero de la unua supply (`3`) kaj la *tuta dua supply* (`10, 20`) estas fortranĉitaj antaŭ ol ili estas liveritaj. Do `@out` tenas nur `[1 2]`. Se `done` nur silentigus sian propran fluon, vi vidus `[1 2 10 20]` — sed unu `done` haltigas ĉiujn reagojn samtempe.

</div>

{% include nav.html %}
