---
title: 'Solvo: Malplenigu dosierujon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
mkdir 'cache';
spurt 'cache/a.tmp', '1';
spurt 'cache/b.tmp', '2';

.unlink for 'cache'.IO.dir;
rmdir 'cache';

say 'cache'.IO.e;
```

🦋 Vi povas trovi la fontkodon en la dosiero [clear-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/deleting/clear-a-directory.raku).

## Eligo

```
False
```

## Komentoj

1. `rmdir` forigas nur malplenan dosierujon, do la dosieroj devas foriri unue. `'cache'.IO.dir` listigas la erojn, kaj `.unlink for …` forigas ĉiun el ili.

1. Kun la dosierujo nun malplena, `rmdir` forigas ĝin. La fina testo `.e` raportas `False`, konfirmante, ke `cache` malaperis.

{% include nav.html %}
