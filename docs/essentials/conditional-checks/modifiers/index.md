---
title: Postfix forms of if and unless
---

{% include menu.html %}

Raku offers a very handy solution when you want to execute a simple statement conditionally. In this case, there’s no need to create a separate block of code. Just put `if` or `unless` immediately after the statement. In Raku, such constructs are called _statement modifiers_.

```raku
say 'Good afternoon' if $hours > 12;

say 'All systems work' unless $broken;
```

{% include nav.html %}
