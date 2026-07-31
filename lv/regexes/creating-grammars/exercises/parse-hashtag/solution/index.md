---
title: 'Risinājums: Parsējiet tēmturi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 Atrodiet programmu failā [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Izvade

```
｢raku｣
```

## Komentāri

1. `TOP` izraksta fiksēto `#`, kam seko marķieris `<tag>`.

1. `.parse` pieprasa, lai sakristu visa virkne, un birka tad ir pieejama kā tvērums `<tag>`.

## Cits variants

Tā vietā var ļaut `tag` sakrist ar visu tēmturi — `#` kopā ar vārdu — un vārdu sasniegt caur ligzdotu likumu `word`:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

Tas izdrukā to pašu `｢raku｣`. Tagad `<tag>` satver visu `#raku`, bet vārds tā iekšienē ir sasniedzams kā `<tag><word>`. Gramatika lasās mazliet vairāk kā tā lieta, ko apraksta — tēmturis *ir* `#`, kam seko vārds, un vārds ir savs nosaukts gabals.

{% include nav.html %}
