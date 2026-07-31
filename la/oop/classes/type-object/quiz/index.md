---
title: Quiz — Classes
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit? Memento `WHAT` *genus* nuntiare, dum `defined` est id quod obiectum generis ab exemplari discernit.

```raku
class Dog {
}

say Dog.WHAT === Dog.new.WHAT;
```

{:.quiz}
0 | False
1 | True
0 | (Dog)
0 | errorem

{% include quiz.html %}

{% include nav.html %}
