---
title: Typed parameters of functions
---

{% include menu.html %}

Параметри функцій у Raku можуть бути обмежені типами. Це дуже схоже на [типізовані змінні](/uk/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

Тепер функція вимагає, щоб її аргументи були цілими числами.

```raku
say add(10, 20);
# say add(pi, e); # Помилка
```

Спроба передати параметр будь-якого іншого типу, ніж `Int`, призведе до помилки під час компіляції.

```
$ raku t.raku
===SORRY!=== Error while compiling t.raku
Calling add(Num, Num) will never work with declared signature (Int $x, Int $y)
at t.raku:5
------> say ⏏add(pi, e);
```

Зверніть увагу, що Raku не буде автоматично конвертувати типи, навіть якщо це можливо в інших випадках.

```raku
# say add('3', '4'); # Помилка
say '3' + '4'; # OK і результат 7
```

%%tipblock
## Як визначити, що це помилка під час компіляції
Якщо повідомлення про помилку починається з `===SORRY!=== Error while compiling`, це означає, що помилка сталася під час компіляції.
%%/tipblock

{% include nav.html %}