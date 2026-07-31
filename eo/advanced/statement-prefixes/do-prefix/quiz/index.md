---
title: Kvizo — do
translations_gpt:
---

{% include menu.html %}

Kion presas la sekva programo?

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

`do` funkcias antaŭ kontrolstrukturoj, ne nur nudaj blokoj. Ĉi tie `do given` transformas la tutan `given`/`when` en esprimon. La temo `-3` kongruas kun `$_ < 0`, do la esprimo donas `'neg'`, kiu estas konservita en `$s`.

</div>

{% include nav.html %}
