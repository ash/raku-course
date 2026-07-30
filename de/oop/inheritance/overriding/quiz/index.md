---
title: 'Quiz — Vererbung'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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
0 | ein Fehler

{% include quiz.html %}

{% include nav.html %}
