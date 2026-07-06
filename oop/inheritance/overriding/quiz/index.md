---
title: 'Quiz — Inheritance'
---

{% include menu.html %}

What does the following program print?

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
0 | an error

{% include quiz.html %}

{% include nav.html %}
