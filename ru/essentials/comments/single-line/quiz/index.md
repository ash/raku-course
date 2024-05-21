---
title: 'Тест: Однострочные комментарии'
---

{% include menu.html %}

Выберите строки с правильными комментариями. Не бойтесь, если вы пока не
понимаете сам код.

{:.quiz}
1 | `my $name = 'John'; # Setting the name`
1 | `my $age = 23; ## Change it next year` | Все после первого `#` является комментарием.
0 | `say $name; Printing name` | Комментарий должен начинаться с `#`.
0 | `my $city = 'TBA'; // Not yet known` | Комментарии в стиле C++ не работают в Raku.
1 | `# say $age;` | Вся строка была закомментирована.
1 | `#say $age;`

{% include quiz.html %}

{% assign human=1 %}
{% include nav.html %}
