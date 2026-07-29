---
title: 'Тест: `if`'
---

{% include menu.html %}

Доповніть наведені програми.

## 1

Ця програма має перевірити, чи вік становить 21 рік або більше.

{:.quiz-code}
. | my $age = 24;
>= { | if $age ␣␣ 21 ␣ | Тут можна використати як `>=`, так і `≥`.
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'We can sell it to you.';
} | ␣

## 2

У цій програмі потрібно перевірити, чи `$x` лежить між 10 та 15 (не включно).

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
