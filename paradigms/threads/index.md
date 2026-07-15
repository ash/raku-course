---
title: Threads
---

{% include menu.html %}

A _thread_ is an independent line of execution that runs alongside the rest of your program. Starting a thread lets a piece of work happen in the background while the main program carries on.

Threads are the lowest-level concurrency tool in Raku. In everyday code you will usually reach for the higher-level [_promises_](/paradigms/promises) of the next section, which are built on top of threads but are far easier to combine. Still, it is worth seeing the basic mechanism: how to start a thread and how to wait for it.

{% include nav.html %}
