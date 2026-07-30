---
title: Quiz — Statement-prefixen
translations_gpt:
---

{% include menu.html %}

Wat print het volgende programma?

```raku
my $v;
quietly {
    say $v + 10;
}
```

{:.quiz}
0 | A warning, then 10
1 | 10
0 | Nil
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Het optellen van `10` bij de ongedefinieerde `$v` behandelt deze als `0`, wat `10` oplevert. Normaal zou dit ook een waarschuwing "uninitialized value" afdrukken, maar het prefix `quietly` onderdrukt die, zodat alleen `10` wordt afgedrukt.

</div>

{% include nav.html %}
