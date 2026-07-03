---
title: The `.gist` method
---

{% include menu.html %}

The `.gist` method returns a **human-friendly** representation of a value — the form you would want to *read*. This is exactly what `say` (and `note`) print: they call `.gist` on each argument.

```raku
say 42.gist;     # 42
say 'Raku'.gist; # Raku
```

For simple values the gist is just the value itself. For compound data, `.gist` adds a little formatting so the structure stays readable:

```raku
my @a = 'alpha', 'beta', 'gamma';
say @a.gist; # [alpha beta gamma]
```

A type object — a value that stands for the type itself — gists as its name in parentheses, which makes it easy to spot in the output:

```raku
say Int.gist; # (Int)
```

{% include nav.html %}
