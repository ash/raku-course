---
title: Code blocks
---

{% include menu.html %}

Code blocks are fragments of your program that are enclosed in a pair of curly braces: `{` and `}`. They group a series of statements that work together as a kind of one big statement. We will see many use cases in the further sections, but now it is time to learn about lexical scoping.

```raku
{
    say 'Hello, World!';
}
```

The presence of a code block in this program does not add much sence, but code blocks are quite useful in other situations, which we’ll cover very soon.

But first let us examine the concept of _scope_.

{% include nav.html %}
