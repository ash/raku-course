---
title: Nomitaj kaptoj
translations_gpt:
---

{% include menu.html %}

Numeritaj kaptoj estas oportunaj, sed kiam ŝablono kreskas, nomoj estas pli klaraj ol numeroj. Por doni al kapto nomon, skribu `$<name>=( … )`:

```raku
if 'Anna:30' ~~ / $<name>=(\w+) ':' $<age>=(\d+) / {
    say $<name>; # ｢Anna｣
    say $<age>;  # ｢30｣
}
```

La kaptitaj pecoj nun estas atingataj laŭ nomo tra `$<name>` kaj `$<age>` anstataŭ `$0` kaj `$1`. Tio estas la samo kiel skribi `$/<name>`, ĉar la nomoj loĝas ene de la kongrua variablo `$/`.

Nomitaj kaptoj igas ŝablonon legiĝi preskaŭ kiel priskribo de la datumoj:

```raku
if 'x=5' ~~ / $<key>=(\w+) '=' $<value>=(\w+) / {
    say "key is $<key>, value is $<value>"; # key is x, value is 5
}
```

Kiel ĉe poziciaj kaptoj, ĉiu nomita kapto estas kongrua objekto, do `$<age>.Str` donas la simplan tekston kaj `$<age>.from` donas ĝian pozicion.

{% include nav.html %}
