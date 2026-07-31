---
title: Quiz — do
---

{% include menu.html %}

Quid sequens programma imprimit?

```raku
my $s = do given -3 {
    when $_ < 0 { 'neg' }
    default     { 'nonneg' }
};
say $s;
```

{:.quiz}
1 | neg
0 | nonneg
0 | -3
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`do` ante structuras fluxus controllandi operatur, non solum copias nudas. Hic `do given` totum `given`/`when` in expressionem convertit. Topicum `-3` condicioni `$_ < 0` congruit, ergo expressio `'neg'` producit, quod in `$s` reponitur.

</div>

{% include nav.html %}
