---
title: 'Тест — Класи'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма? Пам'ятайте, що `WHAT` повідомляє *тип*, а `defined` — це те, що відрізняє об'єкт типу від екземпляра.

```raku
class Dog {
}

say Dog.WHAT === Dog.new.WHAT;
```

{:.quiz}
0 | False
1 | True
0 | (Dog)
0 | помилку

{% include quiz.html %}

{% include nav.html %}
