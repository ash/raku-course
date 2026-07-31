---
title: 'Tests: `if`'
---

{% include menu.html %}

Pabeidziet šādas programmas.

## 1

Šai programmai jāpārbauda, vai vecums ir 21 gads vai vairāk.

{:.quiz-code}
. | my $age = 24;
>= { | if $age ␣␣ 21 ␣ | Šeit var lietot gan `>=`, gan `≥`.
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'We can sell it to you.';
} | ␣

## 2

Šajā programmā jums jāpārbauda, vai `$x` ir starp 10 un 15 (neieskaitot robežas).

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