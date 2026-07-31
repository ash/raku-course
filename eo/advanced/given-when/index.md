---
title: '`given` kaj `when`'
translations_gpt:
---

{% include menu.html %}

Kiam programo devas elekti inter pluraj alternativoj, ĉeno de kontroloj `if` kaj `elsif` povas fariĝi longa kaj ripetema. En tia situacio la konstruo `given`/`when` ofte estas pli klara. Ĝi similas al la instrukcio `switch` trovebla en aliaj lingvoj.

La bloko `given` prenas valoron kaj faras ĝin la _temo_ — la speciala variablo `$_`. Ĉiu bloko `when` tiam estas komparata kun tiu temo, kaj la unua, kiu kongruas, ruliĝas:

```raku
my $n = 2;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    when 3 { say 'three' }
}
```

Ĉi tiu programo presas:

```
two
```

Malsame ol `switch` en kelkaj aliaj lingvoj, ne estas trafalado: tuj kiam `when` kongruas, ĝia bloko ruliĝas kaj la bloko `given` finiĝas. La restantaj blokoj `when` ne estas provataj.

## La bloko `default`

Bloko `default` ruliĝas, kiam neniu el la blokoj `when` kongruis. Ĝi ludas la saman rolon kiel la branĉo `else` de instrukcio `if`:

```raku
my $n = 5;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    default { say 'many' }
}
```

Ĉar `$n` estas nek `1` nek `2`, la programo presas:

```
many
```

{% include nav.html %}
