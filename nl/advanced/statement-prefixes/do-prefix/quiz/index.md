---
title: Quiz — do
translations_gpt:
---

{% include menu.html %}

Wat print het volgende programma?

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

`do` werkt voor besturingsstructuren, niet alleen voor kale blokken. Hier maakt `do given` van het hele `given`/`when`-construct een expressie. Het onderwerp `-3` komt overeen met `$_ < 0`, dus de expressie levert `'neg'` op, dat wordt opgeslagen in `$s`.

</div>

{% include nav.html %}
