---
title: Quiz — si
---

{% include menu.html %}

Complete the following programs.

## 1

This program has to check if the age is 21 years or more.

{:.quiz-code}
. | my $age = 24;
>= { | si $age ␣␣ 21 ␣ | Both `>=` and `≥` can be used here.
. | &nbsp;&nbsp;&nbsp;&nbsp;dic 'Possumus id tibi vendere.';
} | ␣

## 2

In this program, you have to check if `$x` is between 10 and 15 (exclusive).

{:.quiz-code}
. | my $x = 12.3;
&lt; &lt; | si 10 ␣ $x ␣ 15 {
. | &nbsp;&nbsp;&nbsp;&nbsp;dic 'Valor $x acceptabilis est.';
. | }


{% include quiz.html %}
<script>
    replacements = [['≥', '>=']];
</script>

{% include nav.html %}