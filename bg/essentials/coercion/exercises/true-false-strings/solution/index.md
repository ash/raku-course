---
title: 'Solution: Истински и фалшиви стрингове'
---

{% include menu.html %}

Това упражнение е подобно на [предишното](../../true-false-numbers), но този път задачата е малко по-сложна. Има повече „подозрителни“ низове, които могат да бъдат третирани като `False`. Нека ги разгледаме.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

От всички тези, само празният низ се преобразува като `False`. Всички останали низове, дори тези, които съдържат само интервали или явен знак `0`, стават `True`.

🦋 Можете да намерите пълната програма с горния пример във файла [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-strings.raku).

{% include nav.html %}