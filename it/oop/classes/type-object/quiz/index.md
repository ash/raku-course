---
title: Quiz — Classi
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente? Ricorda che `WHAT` riferisce il *tipo*, mentre `defined` è ciò che distingue un oggetto di tipo da un'istanza.

```raku
class Dog {
}

say Dog.WHAT === Dog.new.WHAT;
```

{:.quiz}
0 | False
1 | True
0 | (Dog)
0 | un errore

{% include quiz.html %}

{% include nav.html %}
