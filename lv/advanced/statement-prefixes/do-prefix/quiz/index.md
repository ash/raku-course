---
title: Viktorīna — do
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

`do` darbojas ne tikai kailu bloku, bet arī vadības struktūru priekšā. Šeit `do given` pārvērš visu `given`/`when` par izteiksmi. Tēma `-3` atbilst `$_ < 0`, tāpēc izteiksme dod `'neg'`, kas tiek saglabāts `$s`.

</div>

{% include nav.html %}
