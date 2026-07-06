---
title: 'Quiz — Running programs'
---

{% include menu.html %}

Which function passes its command through the system **shell**, allowing pipes and redirection?

{:.quiz}
0 | `run`
1 | `shell`
0 | `exec`
0 | `system`

{% include quiz.html %}

<div class="extended-explanation">

`shell` passes a single string to the shell, which interprets features like pipes. `run` launches a program directly with separate arguments and no shell, which is safer and the better default.

</div>

{% include nav.html %}
