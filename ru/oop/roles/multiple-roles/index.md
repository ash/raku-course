---
title: Композиция нескольких ролей
translations_gpt:
---

{% include menu.html %}

Класс может выполнять больше одной роли. Достаточно перечислить каждую со своим `does`:

```raku
role Walk {
    method move { 'walking' }
}

role Swim {
    method dive { 'diving' }
}

class Duck does Walk does Swim {
}
```

Теперь у класса `Duck` есть и метод `move` из `Walk`, и метод `dive` из `Swim`:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Такое объединение ролей называется _композицией_. Оно позволяет собирать класс из нескольких
независимых кусочков поведения, что часто гибче, чем выстраивать единую цепочку наследования:
класс может подмешать ровно те возможности, которые ему нужны, и ничего лишнего.

{% include nav.html %}
