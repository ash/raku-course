---
title: 'Тест: Однострочные комментарии'
---

{% include menu.html %}

Выберите строки с правильными комментариями. Не бойтесь, если вы пока не
понимаете сам код.

{:.quiz}
1 | `my $name = 'John'; # Setting the name`
1 | `my $age = 23; ## Change it next year` | Everything after the first `#` is a comment.
0 | `say $name; Printing name` | A comment must start with a `#`.
0 | `my $city = 'TBA'; // Not yet known` | C++-style comments are not recognised in Raku.
1 | `# say $age;` | The whole line has been commented out.
1 | `#say $age;`

{% include quiz.html %}

{% include nav.html %}
