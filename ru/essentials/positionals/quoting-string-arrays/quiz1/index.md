---
title: Викторина — Цитирование строковых массивов
---

{% include menu.html %}

Проверьте, для каких массивов элемент с индексом `1` содержит букву `B`. Другими словами, `say @array[1]` выводит `B`.

{:.quiz}
1 | my @array = &lt;A B C&gt;;
1 | my @array = &apos;A&apos;, &apos;B&apos;, &apos;C&apos;;
0 | my @array = <&apos;A&apos;, &apos;B&apos;, &apos;C&apos;>; | Элементы этого массива содержат как кавычки, так и запятую: `'B',`.
1 | my @array = [&apos;A&apos;, &apos;B&apos;, &apos;C&apos;];
1 | my @array = (&apos;A&apos;, &apos;B&apos;, &apos;C&apos;);

{% include quiz.html %}

{% include nav.html %}