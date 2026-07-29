---
title: Пошук у рядках
translations_gpt:
---

{% include menu.html %}

Кілька методів відповідають на запитання про те, що містить рядок.

Метод `contains` повідомляє, чи трапляється один рядок будь-де всередині іншого:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

Методи `starts-with` та `ends-with` перевіряють початок і кінець рядка:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

Коли потрібна точна позиція підрядка, скористайтеся `index`. Він повертає індекс першого збігу, рахуючи від нуля:

```raku
say 'Raku'.index('k'); # 2
```

Якщо підрядок не знайдено, `index` повертає `Nil`, а не число:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
