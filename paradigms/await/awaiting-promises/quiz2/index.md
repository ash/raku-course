---
title: 'Quiz — await and sleep'
---

{% include menu.html %}

What does the following program do?

```raku
my $p = start { sleep 2; 42 };
say 'waiting';
say await $p;
```

{:.quiz}
1 | Prints `waiting` at once, then prints `42` about two seconds later
0 | Pauses for two seconds, then prints `waiting` and `42` together
0 | Prints `waiting` and `42` at once — the sleep happens in the background
0 | Prints `waiting`, then `Promise` — you cannot await a sleeping promise

{% include quiz.html %}

<div class="extended-explanation">

`start` returns a promise **immediately** — the block, with its `sleep`, runs on a background thread. So `say 'waiting'` executes straight away. It is `await` that blocks: the program pauses there until the background block finishes its two-second nap and produces `42`, which is then printed. The pause belongs to the `await` line, not to the `start` line.

</div>

{% include nav.html %}
