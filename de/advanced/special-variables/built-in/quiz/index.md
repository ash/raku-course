---
title: Quiz — Spezielle Variablen
---

{% include menu.html %}

Welche eingebaute Variable enthält die Kommandozeilenargumente des Programms?

{:.quiz}
0 | `$*ARGS`
1 | `@*ARGS`
0 | `@*ARGV`
0 | `%*ENV`

{% include quiz.html %}

<div class="extended-explanation">

Die Kommandozeilenargumente kommen als *Liste*, daher hat die Variable das `@`-Sigil und das dynamische `*`-Twigil: `@*ARGS`. `%*ENV` ist der Umgebungs-Hash, nicht die Argumente, und `@*ARGV` ist die Perl-Schreibweise, die Raku nicht verwendet.

</div>

{% include nav.html %}
