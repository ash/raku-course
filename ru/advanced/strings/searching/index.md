---
title: Поиск в строках
translations_gpt:
---

{% include menu.html %}

Несколько методов отвечают на вопросы о содержимом строки.

Метод `contains` сообщает, содержится ли одна строка где-либо внутри другой:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

Методы `starts-with` и `ends-with` проверяют начало и конец строки:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

Когда вам нужна точная позиция подстроки, используйте `index`. Он возвращает индекс первого совпадения, считая с нуля:

```raku
say 'Raku'.index('k'); # 2
```

Если подстрока не найдена, `index` возвращает `Nil`, а не число:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
