---
title: 'Risinājums: Veidot URL'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 Programmas pirmkodu var atrast failā [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Izvade

```
http://example.com
18
```

## Komentāri

1. Masīvs ir uzrakstīts ar leņķa iekavu citēšanas formu `<...>`, kas ir tas pats, kas `'http', '://', 'example', '.com'`.

1. Redukcijas metaoperators `[~]` ievieto virkņu konkatenācijas operatoru `~` starp visiem elementiem, tāpēc `[~] @parts` salīmē četrus gabalus vienā virknē `http://example.com`.

1. Rezultāta saglabāšana mainīgajā `$url` ļauj to atkārtoti izmantot: `$url.chars` pēc tam parāda, ka saliktais URL ir `18` rakstzīmes garš.

{% include nav.html %}
