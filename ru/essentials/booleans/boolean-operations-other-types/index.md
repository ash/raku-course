---
title: Логические операции с другими типами
---

{% include menu.html %}

В следующей главе мы поговорим о приведении значений одних типов к другим. Но
сейчас очень важно отметить одну особенность Raku. Когда вы применяете
логические операции к строкам и числам, значения не приводятся к булеву типу, и
результат тоже не является булевым. Рассмотрим пример ниже:


```raku
say 'Hello' && 'World'; # World
say 'Alpha' || 'Beta';  # Alpha
say 0 ^^ 42;            # 42
```

Давайте прочтем правила 📖 [из документации](https://docs.raku.org/language/operators#Tight_AND_precedence):

* `&&` возвращает первый ложный аргумент, иначе возвращает последний аргумент.
* `||` возвращает первый истинный аргумент, иначе возвращает последний аргумент.
* `^^` возвращает истинный аргумент, если он один и только один. Возвращает
  последний аргумент, если все аргументы ложные. Возвращает `Nil`, если больше
  чем один аргумент истинный.

Истинный аргумент означает, что он имеет значение True в булевом
контексте. Соответственно — ложный аргумент имеет значение False.
Заметьте, что мы только что познакомились с "нулевым" значением `Nil`.

{% assign human=1 %}
{% include nav.html %}
