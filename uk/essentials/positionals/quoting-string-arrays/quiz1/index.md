---
title: Вікторина — Цитування масивів рядків
---

{% include menu.html %}

Перевірте, для яких із масивів елемент з індексом `1` містить літеру `B`. Іншими словами, `say @array[1]` виводить `B`.

{:.quiz}
1 | my @array = &lt;A B C&gt;;
1 | my @array = &apos;A&apos;, &apos;B&apos;, &apos;C&apos;;
0 | my @array = <&apos;A&apos;, &apos;B&apos;, &apos;C&apos;>; | Елементи цього масиву містять як лапки, так і кому: `'B',`.
1 | my @array = [&apos;A&apos;, &apos;B&apos;, &apos;C&apos;];
1 | my @array = (&apos;A&apos;, &apos;B&apos;, &apos;C&apos;);

{% include quiz.html %}

{% include nav.html %}