---
title: 'Quiz — Classes'
---

{% include menu.html %}

What does the following program print? Remember that `WHAT` reports the *type*, while `defined` is what tells a type object apart from an instance.

```raku
class Dog {
}

say Dog.WHAT === Dog.new.WHAT;
```

{:.quiz}
0 | False
1 | True
0 | (Dog)
0 | an error

{% include quiz.html %}

{% include nav.html %}
