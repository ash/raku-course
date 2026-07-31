---
title: Laboro kun tempo
translations_gpt:
---

{% include menu.html %}

Kiam vi bezonas la horon de la tago same kiel la daton, uzu la tipon `DateTime`. Ĝi estas kreata multe kiel `Date`, sed vi ankaŭ donas la horon, la minuton kaj la sekundon:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt; # 2026-06-27T14:30:00Z
```

La defaŭlta teksta formo sekvas la normon ISO 8601: la dato, la litero `T`, la tempo, kaj fina `Z` por la horzono UTC.

`DateTime` donas aliron al la tempaj partoj, krom la datpartoj, kiujn vi jam konas:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt.hour;   # 14
say $dt.minute; # 30
```

Por ricevi la nunan momenton, voku `DateTime.now`. Kiel ĉe `Date.today`, ni ne montras ĝian eligon, ĉar ĝi ŝanĝiĝas ĉiufoje kiam la programo ruliĝas.

{% include nav.html %}
