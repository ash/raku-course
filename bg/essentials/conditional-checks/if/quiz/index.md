---
title: 'Тест: `if`'
---

{% include menu.html %}

Допълнете следващите програми.

## 1

Тази програма трябва да провери дали възрастта е 21 години или повече.

{:.quiz-code}
. | my $age = 24;
>= { | if $age ␣␣ 21 ␣ | Тук могат да се използват както `>=`, така и `≥`.
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'We can sell it to you.';
} | ␣

## 2

В тази програма трябва да проверите дали `$x` е между 10 и 15 (без границите).

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