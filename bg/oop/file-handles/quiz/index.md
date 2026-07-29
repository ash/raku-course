---
title: 'Тест — Четене на редове'
translations_gpt:
---

{% include menu.html %}

Файл `n.txt` съдържа три реда. Колко пъти се изпълнява тялото на този цикъл?

```raku
for 'n.txt'.IO.lines -> $line {
    say $line;
}
```

{:.quiz}
0 | 1
1 | 3
0 | 0
0 | по веднъж за всеки символ

{% include quiz.html %}

{% include nav.html %}
