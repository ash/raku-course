---
title: Viktorīna — whenever un done
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Pirmais `whenever` ieliek masīvā `1`, tad `2` — un pie `2` tas izsauc `done`. Būtiskais ir tas, ka `done` izbeidz **visu `react` bloku**, nevis tikai savu `whenever`: pirmās supply atlikums (`3`) un *visa otrā supply* (`10, 20`) tiek nogriezti, pirms tie tiek piegādāti. Tāpēc `@out` satur tikai `[1 2]`. Ja `done` apklusinātu vienīgi savu straumi, jūs redzētu `[1 2 10 20]` — bet viens `done` aptur visas reakcijas uzreiz.

</div>

{% include nav.html %}
