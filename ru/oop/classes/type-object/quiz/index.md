---
title: Тест — Классы
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа? Помните, что `WHAT` сообщает *тип*, а отличить объект типа
от экземпляра позволяет `defined`.

```raku
class Dog {
}

say Dog.WHAT === Dog.new.WHAT;
```

{:.quiz}
0 | False
1 | True
0 | (Dog)
0 | ошибка

{% include quiz.html %}

{% include nav.html %}
