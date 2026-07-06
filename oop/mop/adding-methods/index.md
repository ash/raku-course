---
title: Adding methods at runtime
---

{% include menu.html %}

The MOP is not only for inspection — it can also **change** a type while the program runs. The meta-method `.^add_method` adds a new method to a class:

```raku
class Empty {
}

Empty.^add_method('greet', method { 'hi' });

say Empty.new.greet; # hi
```

The class `Empty` is defined with no methods at all. `Empty.^add_method('greet', …)` then attaches a method named `greet`, given as an anonymous `method { … }`. From that point on, every `Empty` object responds to `.greet`, just as if it had been written into the class.

This is genuine meta-programming: the metaobject for `Empty` is being told to grow a new method. The same protocol underlies features you have already used — conceptually, when you write `class`, `role`, `has`, or `method`, the compiler builds your type through MOP methods like `.^add_method` and `.^add_attribute` on your behalf.

“Conceptually”, because this is a model of the language, not a promise about any one compiler. The MOP is what the object system is *specified* in terms of; whether a given implementation literally routes every declaration through those meta-methods — and whether you can observe it doing so — is up to that implementation. For the same reason, *calling* these meta-methods yourself is implementation-dependent: which ones a compiler exposes, and exactly how they behave, can differ, so code that reaches for `.^add_method` and friends may not run the same way on every Raku.

Adding methods at runtime is a powerful and rarely needed tool. Most programs never reach for it, but it is what makes Raku’s object system open: the rules of classes are themselves written in terms of the MOP, so you can extend them. For everyday code, the inspection meta-methods of the previous topic are the part of the MOP you will actually use.

{% include nav.html %}
