---
title: 'Quiz — Threads'
---

{% include menu.html %}

What does `Thread.start` return?

{:.quiz}
0 | The value the block produced
1 | A `Thread` object representing the running work
0 | `True` if the thread started
0 | Nothing — it blocks until the thread finishes

{% include quiz.html %}

<div class="extended-explanation">

`Thread.start` launches the block on a new thread and immediately returns a `Thread` object. The main program keeps running; you use that object later to wait for the thread to complete.

</div>

{% include nav.html %}
