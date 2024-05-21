---
title: Quiz — if
---

{% include menu.html %}

Complete the following programs.

## 1

This program has to check if the age is 21 years or more.

{:.quiz-code}
. | my $age = 24;
>= { | if $age ␣␣ 21 ␣ | Both `>=` and `≥` can be used here.
. | &nbsp;&nbsp;&nbsp;&nbsp;sagen &apos;Wir können es Ihnen verkaufen.&apos;;
} | ␣

## 2

In this program, you have to check if `$x` is between 10 and 15 (exclusive).

{:.quiz-code}
. | my $x = 12.3;
&lt; &lt; | if 10 ␣ $x ␣ 15 {
. | &nbsp;&nbsp;&nbsp;&nbsp;sagen &apos;Der Wert von $x ist akzeptabel.&apos;;
. | }


{% include quiz.html %}
<script>
    replacements = [['≥', '>=']];
</script>

{% include nav.html %}