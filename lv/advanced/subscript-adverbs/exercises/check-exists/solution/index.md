---
title: 'Risinājums: Vai atslēga eksistē'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my %h = a => 1, b => 2;
say %h<z>:exists;
```

🦋 Atrodiet programmu failā [check-exists.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/subscript-adverbs/check-exists.raku).

## Izvade

```
False
```

## Komentāri

1. Apstākļvārds `:exists` atgriež to, vai atslēga ir klāt, nepaņemot vērtību.

1. Jauktenī nav atslēgas `z`, tāpēc tas atgriež `False` — un, atšķirībā no parastas meklēšanas, tas blakusefektā atslēgu neizveido.

{% include nav.html %}
