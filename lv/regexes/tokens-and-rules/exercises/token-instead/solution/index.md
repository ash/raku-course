---
title: 'Risinājums: regex pret token'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my regex r { \d+ '5' }
my token t { \d+ '5' }

say so '12345' ~~ / <r> /;
say so '12345' ~~ / <t> /;
```

🦋 Atrodiet programmu failā [token-instead.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/token-instead.raku).

## Izvade

```
True
False
```

## Komentāri

1. `regex` iekšienē `\d+` vispirms sagrābj visu `12345`, un tad **atkāpjas** — atdod pēdējo `5`, lai burtiskais `5` varētu sakrist. Tāpēc regulārā izteiksme izdodas.

1. `token` atsakās kaut ko atdot: `\d+` patur visu `12345`, burtiskais `5` neatrod nekā palikuša, un marķieris neizdodas. Tieši šī neatkāpšanās uzvedība ir iemesls, kāpēc `token` ir pareizais noklusējums gramatiku iekšienē.

{% include nav.html %}
