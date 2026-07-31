---
title: 'Risinājums: Vai eksistē?'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say 'test.txt'.IO.e;
spurt 'test.txt', 'x';
say 'test.txt'.IO.e;
```

🦋 Atrodiet programmu failā [does-it-exist.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/does-it-exist.raku).

## Izvade

```
False
True
```

## Komentāri

1. `.e` pārbauda, vai ceļš eksistē. Pirmā pārbaude notiek, pirms fails ir izveidots, tāpēc tā atgriež `False`.

1. `spurt` tad izveido `test.txt`, un otrā pārbaude uz *tā paša* ceļa tagad atgriež `True`. Ceļa objektam jautājot atkārtoti, tiek atspoguļots failu sistēmas pašreizējais stāvoklis.

{% include nav.html %}
