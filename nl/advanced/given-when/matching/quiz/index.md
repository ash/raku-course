---
title: Quiz — `when`
translations_gpt: true
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
given 5 {
    when $_ > 0 { say 'positive' }
    when 5      { say 'five' }
}
```

{:.quiz}
1 | positive
0 | five
0 | both lines
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

Een `when`-blok *springt automatisch uit* het `given`-blok nadat het matcht — er is geen doorval (fall-through). `5` voldoet aan de eerste voorwaarde `$_ > 0`, dus `positive` wordt afgedrukt en de tweede `when 5` wordt nooit bereikt, ook al zou deze ook gematcht hebben.

</div>

{% include nav.html %}
