---
title: 'Quiz — Special variables'
---

{% include menu.html %}

Which built-in variable holds the program's command-line arguments?

{:.quiz}
0 | `$*ARGS`
1 | `@*ARGS`
0 | `@*ARGV`
0 | `%*ENV`

{% include quiz.html %}

<div class="extended-explanation">

The command-line arguments come as a *list*, so the variable has the `@` sigil and the dynamic `*` twigil: `@*ARGS`. `%*ENV` is the environment hash, not the arguments, and `@*ARGV` is the Perl spelling, which Raku does not use.

</div>

{% include nav.html %}
