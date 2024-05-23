---
title: Позиционные параметры
---

{% include menu.html %}

Порядок параметров функции имеет значение. Например, создадим функцию, которая вычисляет разницу между двумя числами:

```raku
sub diff($a, $b) { $a - $b }
```

Очевидно, что результат вызова `diff(10, 20)` отличается от `diff(20, 10)`.

Параметры, которые перечислены через запятую, как в функции выше, называются _позиционными_. Их значение зависит от порядка, в котором аргументы передаются функции при её вызове.

{% include nav.html %}