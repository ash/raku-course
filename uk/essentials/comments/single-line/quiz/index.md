---
title: 'Вікторина: Однорядкові коментарі'
---

{% include menu.html %}

Виберіть рядки з правильними коментарями. Не хвилюйтеся, якщо ви ще не розумієте код Raku.

{:.quiz}
1 | `my $name = 'John'; # Встановлення імені`
1 | `my $age = 23; ## Змінити наступного року` | Все після першого `#` є коментарем.
0 | `say $name; Друк імені` | Коментар має починатися з `#`.
0 | `my $city = 'TBA'; // Ще не відомо` | Коментарі в стилі C++ не розпізнаються в Raku.
1 | `# say $age;` | Весь рядок закоментовано.
1 | `#say $age;`

{% include quiz.html %}

{% include nav.html %}