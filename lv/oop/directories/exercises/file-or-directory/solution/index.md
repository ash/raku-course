---
title: 'Risinājums: Fails vai direktorija?'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
spurt 'a.txt', 'x';

say 'a.txt'.IO.f;
say 'a.txt'.IO.d;
```

🦋 Atrodiet programmu failā [file-or-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/file-or-directory.raku).

## Izvade

```
True
False
```

## Komentāri

1. `.f` pārbauda, vai tas ir parasts fails, tāpēc `a.txt` gadījumā tā atgriež `True`.

1. `.d` pārbauda, vai tā ir direktorija. Uzdodot to pašu jautājumu par to pašu ceļu, tā atgriež `False`, jo `a.txt` ir fails, nevis direktorija. Abas pārbaudes viena otru papildina, un tieši tā failu no direktorijas var atšķirt.

{% include nav.html %}
