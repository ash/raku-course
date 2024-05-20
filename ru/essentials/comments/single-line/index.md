---
title: Однострочные комментарии
---

{% include menu.html %}

Простейшая форма комментария — это однострочный комментарий. Он начинается с
символа `#` и продолжается до конца строки:

```raku
my $name; # This variable is used to keep user’s name
$name = prompt 'What is your name? ';
say $name; # We see the name now
```

Интересно, что shebang, такой как `#!/usr/bin/env raku`, на первой строчке кода
также будет комментарием для Raku, хотя он может быть прочитан и выполнен
командной оболочкой.

{% include nav.html %}
