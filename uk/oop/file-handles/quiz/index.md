---
title: 'Тест — Читання рядків'
translations_gpt:
---

{% include menu.html %}

Файл `n.txt` містить три рядки. Скільки разів виконається тіло цього циклу?

```raku
for 'n.txt'.IO.lines -> $line {
    say $line;
}
```

{:.quiz}
0 | 1
1 | 3
0 | 0
0 | по разу на кожен символ

{% include quiz.html %}

{% include nav.html %}
