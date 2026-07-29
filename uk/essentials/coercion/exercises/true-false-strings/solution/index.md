---
title: 'Solution: Істинні та хибні рядки'
---

{% include menu.html %}

Ця вправа схожа на [попередню](../../true-false-numbers), але цього разу завдання трохи складніше. Є більше рядків, які можна вважати `False`. Давайте дослідимо їх.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

З усіх цих тільки порожній рядок перетворюється на `False`. Всі інші рядки, навіть ті, що містять лише пробіли або явний символ `0`, стають `True`.

🦋 Ви можете знайти повну програму з наведеним вище прикладом у файлі [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-strings.raku).

{% include nav.html %}