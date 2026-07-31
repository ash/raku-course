---
title: 'Risinājums: Iztīriet direktoriju'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 Atrodiet programmu failā [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Izvade

```
False
```

## Komentāri

1. `rmdir` noņem tikai tukšu direktoriju, tāpēc failiem vispirms jāaiziet. `'cache'.IO.dir` uzskaita ierakstus, un `.unlink for …` katru no tiem izdzēš.

1. Kad direktorija ir tukša, `rmdir` to noņem. Nobeiguma `.e` pārbaude ziņo `False`, apstiprinot, ka `cache` vairs nav.

{% include nav.html %}
