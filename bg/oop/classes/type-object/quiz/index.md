---
title: 'Тест — Класове'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма? Не забравяйте, че `WHAT` съобщава *типа*, докато `defined` е това, което отличава обекта на типа от екземпляра.

```raku
class Dog {
}

say Dog.WHAT === Dog.new.WHAT;
```

{:.quiz}
0 | False
1 | True
0 | (Dog)
0 | грешка

{% include quiz.html %}

{% include nav.html %}
