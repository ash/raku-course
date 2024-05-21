---
title: 'Тест: Интерполяция в строках'
---

{% include menu.html %}

Выберите строки, где значение переменной `$x` было интерполировано ровно один
раз.

{:.quiz}
1 | &quot;The temperature is $x degrees&quot;
0 | &apos;Air pressure is $x mmHg&apos; | В одинарных кавычках интерполяция не происходит.
0 | &apos;The value of \\$x is $x&apos; | Без интерполяции и экранирования, выведет `The value of \$x is $x`.
1 | &quot;The value of \\$x is $x&quot; | Вся фраза выведет, к примеру, `The value of $x is 42`.
0 | &quot;The value of $x is $x&quot; | `$x` интерполирован дважды.

{% include quiz.html %}
{% assign human=1 %}
{% include nav.html %}
