---
title: 'Quiz — The environment'
---

{% include menu.html %}

Which variable holds the program’s environment variables?

{:.quiz}
0 | `@*ARGS`
1 | `%*ENV`
0 | `$*ENV`
0 | `%ENV`

{% include quiz.html %}

<div class="extended-explanation">

`%*ENV` is the dynamic hash of environment variables, read by name as `%*ENV<HOME>`. `@*ARGS` holds the command-line arguments instead.

</div>

{% include nav.html %}
