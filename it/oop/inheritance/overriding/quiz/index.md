---
title: Quiz — Ereditarietà
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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
0 | un errore

{% include quiz.html %}

{% include nav.html %}
