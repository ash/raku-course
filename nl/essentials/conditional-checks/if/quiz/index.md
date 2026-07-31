---
title: 'Quiz: `if`'
---

{% include menu.html %}

Vul de volgende programma’s aan.

## 1

Dit programma moet controleren of de leeftijd 21 jaar of meer is.

{:.quiz-code}
. | my $age = 24;
>= { | if $age ␣␣ 21 ␣ | Zowel `>=` als `≥` kunnen hier worden gebruikt.
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'We can sell it to you.';
} | ␣

## 2

In dit programma moet je controleren of `$x` tussen 10 en 15 ligt (exclusief de grenzen).

{:.quiz-code}
. | my $x = 12.3;
&lt; &lt; | if 10 ␣ $x ␣ 15 {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'The value of $x is acceptable.';
. | }


{% include quiz.html %}
<script>
    replacements = [['≥', '>=']];
</script>

{% include nav.html %}