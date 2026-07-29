---
title: 'Решение: Строки True и False'
---

{% include menu.html %}

Это упражнение похоже на [предыдущее](../../true-false-numbers), но на этот раз задача немного сложнее. Есть больше строк «подозреваемых», которые могут быть интерпретированы как `False`. Давайте исследуем их.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

Из всех этих строк только пустая строка приводится к `False`. Все остальные строки, даже те, которые содержат только пробелы или явный символ `0`, становятся `True`.

🦋 Полную программу с приведенным выше примером можно найти в файле [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-strings.raku).

{% include nav.html %}