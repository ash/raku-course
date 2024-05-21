---
title: Типизированные параметры функций
---

{% include menu.html %}

Параметры функций в Raku могут быть ограничены типом. Это очень похоже на [типизированные переменные](/ru/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

Теперь функция требует, чтобы её аргументы были целыми числами.

```raku
say add(10, 20);
# say add(pi, e); # Ошибка
```

Попытка передать параметр любого другого типа, кроме `Int`, приведет к ошибке времени компиляции.

```
$ raku t.raku
===SORRY!=== Error while compiling t.raku
Calling add(Num, Num) will never work with declared signature (Int $x, Int $y)
at t.raku:5
------> say ⏏add(pi, e);
```

Обратите внимание, что Raku не будет автоматически преобразовывать типы, даже если это возможно в других случаях.

```raku
# say add('3', '4'); # Ошибка
say '3' + '4'; # OK и результат 7
```

%%tipblock
## Как определить, что это ошибка времени компиляции
Если сообщение об ошибке начинается с `===SORRY!=== Error while compiling`, это означает, что ошибка произошла во время компиляции.
%%/tipblock

{% include nav.html %}