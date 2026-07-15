---
title: 'Quiz — Supply kinds'
---

{% include menu.html %}

For an **on-demand** supply such as `Supply.from-list`, what does a second tap receive?

{:.quiz}
0 | Nothing — the first tap used up the values
0 | Only the values emitted after it tapped
1 | The whole sequence, from the start
0 | An error

{% include quiz.html %}

<div class="extended-explanation">

An on-demand supply replays its values for every tap. Each tap is independent and receives the complete sequence from the beginning — unlike a live supply, where late subscribers miss earlier values.

</div>

{% include nav.html %}
