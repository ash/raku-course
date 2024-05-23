---
title: 'Тест: Дължината на фраза'
---

{% include menu.html %}

Какво ще върне методът `.chars` за следните низове?

{:.quiz-select}
4 | 'Raku' — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :)
13 | 'Raku & Rakudo' — (: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 :) | Интервалите също се броят.
6 | 'Ça va?' — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Ç е един единствен Unicode символ.
0 | '' — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Празен низ.
2 | '中国' — (: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 :) | Повече от два байта в UTF-8, но все пак само два символа.

{% include quiz.html %}
{% include nav.html %}