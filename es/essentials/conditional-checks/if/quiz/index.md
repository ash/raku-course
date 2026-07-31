---
title: 'Quiz: `if`'
---

{% include menu.html %}

Completa los siguientes programas.

## 1

Este programa tiene que comprobar si la edad es de 21 años o más.

{:.quiz-code}
. | my $age = 24;
>= { | if $age ␣␣ 21 ␣ | Aquí se pueden usar tanto `>=` como `≥`.
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;We can sell it to you.&apos;;
} | ␣

## 2

En este programa tienes que comprobar si `$x` está entre 10 y 15 (sin incluirlos).

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