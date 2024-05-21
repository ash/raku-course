---
title: Тест — Цитиране на низови масиви
---

{% include menu.html %}

Проверете за кои от масивите елементът с индекс `1` съдържа буквата `B`. С други думи, `say @array[1]` отпечатва `B`.

{:.quiz}
1 | my @array = &lt;A B C&gt;;
1 | my @array = &apos;A&apos;, &apos;B&apos;, &apos;C&apos;;
0 | my @array = <&apos;A&apos;, &apos;B&apos;, &apos;C&apos;>; | Елементите на този масив съдържат както кавичките, така и запетаята: `'B',`.
1 | my @array = [&apos;A&apos;, &apos;B&apos;, &apos;C&apos;];
1 | my @array = (&apos;A&apos;, &apos;B&apos;, &apos;C&apos;);

{% include quiz.html %}

{% include nav.html %}