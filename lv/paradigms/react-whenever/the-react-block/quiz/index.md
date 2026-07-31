---
title: Viktorīna — react
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

`whenever` ķermenis savāc katru vērtību, bet izsauc `done`, tiklīdz ierauga `3`. `done` aizver `react` bloku, tāpēc supply tiek pamesta un `4` un `5` nekad netiek apstrādāti, atstājot `[1 2 3]`.

</div>

{% include nav.html %}
