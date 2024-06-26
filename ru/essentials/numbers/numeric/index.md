---
title: Числа с плавающей точкой в Raku
---

{% include menu.html %}

В предыдущей главе мы видели, что такие числа, как `1.5`, являются рациональными
числами. Чтобы написать число, которое будет соответствовать типу `double` в
C++, используйте экспоненциальную запись:

```raku
1E0
314e-2
-5e-20
5.424E40
7.6e+15
```

В этом случае Raku создаст число типа `Num` и сохранит его внутренне как число
стандарта IEEE 754.

## Встроенные константы

Есть несколько встроенных констант, которые вы можете использовать, они
перечислены ниже. Это числа типа `Num`. Доступны оба варианта, ASCII и Юникод:

`pi` | `π` | 3.141592653589793
`tau` | `τ` | равно `2 * π`
`e` | `𝑒` | 2.718281828459045

{% assign human=1 %}
{% include nav.html %}
