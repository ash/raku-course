---
title: Postfix forms of if and unless
---

{% include menu.html %}

Raku biedt een zeer handige oplossing wanneer je een eenvoudige instructie voorwaardelijk wilt uitvoeren. In dit geval is het niet nodig om een apart codeblok te maken. Plaats gewoon `if` of `unless` direct na de instructie. In Raku worden dergelijke constructies _statement modifiers_ genoemd.

```raku
say 'Good afternoon' if $hours > 12;

say 'All systems work' unless $broken;
```

{% include nav.html %}