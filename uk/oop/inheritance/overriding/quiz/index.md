---
title: 'Тест — Успадкування'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
class Animal {
    method speak { 'some sound' }
}

class Cow is Animal {
    method speak { 'Moo' }
}

say Cow.new.speak;
```

{:.quiz}
0 | some sound
1 | Moo
0 | Animal
0 | помилку

{% include quiz.html %}

{% include nav.html %}
