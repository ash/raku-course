---
title: 'Risinājums: Izdzēsiet failu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
spurt 'note.txt', 'temporary';
say 'note.txt'.IO.e;

unlink 'note.txt';
say 'note.txt'.IO.e;
```

🦋 Atrodiet programmu failā [delete-a-file.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/delete-a-file.raku).

## Izvade

```
True
False
```

## Komentāri

1. `spurt` failu izveido, tāpēc pirmā `.e` pārbaude ziņo `True`.

1. `unlink` to izdzēš. Otrā `.e` pārbaude tad ziņo `False`, jo faila vairs nav. Ievērojiet, ka lietots `.e`, nevis `.f`: tipa pārbaude `.f` izmestu izņēmumu ceļam, kura vairs nav, turpretī `.e` vienkārši atbild `False`.

{% include nav.html %}
