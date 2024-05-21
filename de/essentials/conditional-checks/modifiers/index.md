---
title: Postfix-Formen von if und unless
---

{% include menu.html %}

Raku bietet eine sehr praktische Lösung, wenn Sie eine einfache Anweisung bedingt ausführen möchten. In diesem Fall ist es nicht notwendig, einen separaten Codeblock zu erstellen. Setzen Sie einfach `if` oder `unless` unmittelbar nach der Anweisung. In Raku werden solche Konstrukte _statement modifiers_ genannt.

```raku
say 'Guten Nachmittag' if $hours > 12;

say 'Alle Systeme funktionieren' unless $broken;
```

{% include nav.html %}