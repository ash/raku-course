---
title: 'Quiz: `if`'
---

{% include menu.html %}

Completa i seguenti programmi.

## 1

Questo programma deve controllare se l’età è di 21 anni o più.

{:.quiz-code}
. | my $age = 24;
>= { | if $age ␣␣ 21 ␣ | Qui si possono usare sia `>=` sia `≥`.
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;We can sell it to you.&apos;;
} | ␣

## 2

In questo programma devi controllare se `$x` è compreso tra 10 e 15 (estremi esclusi).

{:.quiz-code}
. | my $x = 12.3;
&lt; &lt; | if 10 ␣ $x ␣ 15 {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;The value of $x is acceptable.&apos;;
. | }


{% include quiz.html %}
<script>
    replacements = [['≥', '>=']];
</script>

{% include nav.html %}