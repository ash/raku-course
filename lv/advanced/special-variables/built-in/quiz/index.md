---
title: Viktorīna — Speciālie mainīgie
translations_gpt:
---

{% include menu.html %}

Kurš iebūvētais mainīgais satur programmas komandrindas argumentus?

{:.quiz}
0 | `$*ARGS`
1 | `@*ARGS`
0 | `@*ARGV`
0 | `%*ENV`

{% include quiz.html %}

<div class="extended-explanation">

Komandrindas argumenti pienāk kā *saraksts*, tāpēc mainīgajam ir sigils `@` un dinamiskais tvigils `*`: `@*ARGS`. `%*ENV` ir vides jauktenis, nevis argumenti, un `@*ARGV` ir Perl pieraksts, ko Raku nelieto.

</div>

{% include nav.html %}
