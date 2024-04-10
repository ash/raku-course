---
title: 'Тест: Рациональные числа'
---

{% include menu.html %}

Выберите числа, являющиеся `Rat` в Raku.

{:.quiz}
1 | 3/64 | Это число `Rat`, а не деление двух целых чисел.
1 | ⅞
1 | 2.718281828459045 | Это приближение постоянной Эйлера, но все еще `Rat` число, так как оно конечно.
1 | 10_230/50_245 | Вы также можете использовать здесь разделитель `_`.
1 | 10.345_678 | И здесь тоже.
0 | 10.345,678 | Запятая здесь не является ни десятичной запятой, ни тысячным разделителем.
1 | <33/44> | Другая форма записи рационального числа в Raku.
0 | <33 44> | Это список строк (мы познакомимся с ними далее в курсе).
0 | &apos;<33 44>&apos; | Это строка.
1 | ⅞/⅚ | Это деление двух чисел `Rat`, но результат тоже число типа `Rat`.

{% include quiz.html %}

{% include nav.html %}