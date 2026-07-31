---
title: 'Risinājums: do bloka vērtība'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $label = do if 7 > 5 { 'big' } else { 'small' };

say $label;
```

🦋 Atrodiet programmu failā [do-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/do-block.raku).

## Izvade

```
big
```

## Komentāri

1. Kails `if` ir teikums, un tam nav izmantojamas vērtības. Prefikss `do` pārvērš visu `if`/`else` par izteiksmi.

1. Tā kā `7 > 5` ir patiess, izteiksme dod `'big'`, kas tiek piešķirts `$label`. Tas pats paņēmiens darbojas ar `do given` un `do for`.

1. Figūriekavas `{ }` nav neobligātas. Raku `if` vienmēr ņem bloku, tāpēc zarus nevar saīsināt līdz `if 7 > 5 'big' else 'small'` — tas nekompilējas ar *Missing block*.

{% include nav.html %}
