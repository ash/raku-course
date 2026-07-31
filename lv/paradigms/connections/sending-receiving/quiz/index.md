---
title: Viktorīna — HTTP pieprasījumi
translations_gpt:
---

{% include menu.html %}

Kas HTTP pieprasījumā, kas nosūtīts caur ligzdu, apzīmē pieprasījuma galveņu beigas?

{:.quiz}
0 | Punkts
1 | Tukša rinda (papildu `\r\n`)
0 | Vārds `END`
0 | Ligzdas aizvēršana

{% include quiz.html %}

<div class="extended-explanation">

HTTP galvenes no ķermeņa atdala — un pavēsta «vairāk galveņu nav» — ar tukšu rindu, kas rakstīta kā papildu `\r\n`. Bez tās serveris turpina gaidīt pieprasījuma atlikumu.

</div>

{% include nav.html %}
