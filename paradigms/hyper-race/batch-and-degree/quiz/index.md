---
title: 'Quiz — batch and degree'
---

{% include menu.html %}

In `(1..1000).hyper(:degree(4), :batch(50))`, what does the `:batch(50)` control?

{:.quiz}
1 | How many elements each worker processes in one go before fetching more
0 | How many worker threads run at the same time
0 | How many elements the whole pipeline is allowed to process
0 | The number of CPU cores the program may use

{% include quiz.html %}

<div class="extended-explanation">

`:batch` is the **chunk size** — how many elements a worker takes per turn. The number of workers is `:degree` (here `4`). A larger batch cuts coordination overhead; a smaller one balances uneven work more evenly. Both are hints the compiler may adjust or ignore.

</div>

{% include nav.html %}
