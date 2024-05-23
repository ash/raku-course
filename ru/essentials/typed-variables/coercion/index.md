---
title: Преобразование типов для типизированных переменных
---

{% include menu.html %}

Ограничения типов достаточно строгие. Например, вы не можете присвоить значение типа `Num`, даже если оно содержит целое число, переменной, объявленной как `Int`:

```raku
my Int $x = 42;
# $x = 42e1; # Ошибка
```

Используйте [один из методов](/ru/essentials/coercion/#topics-in-this-section) для приведения значения.

```raku
my Int $x = 42;
$x = 42e1.Int;
$x = Int(42e1);
```

{% include nav.html %}