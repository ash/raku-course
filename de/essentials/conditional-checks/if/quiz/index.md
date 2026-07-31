---
title: 'Quiz: `if`'
---

{% include menu.html %}

Vervollständigen Sie die folgenden Programme.

## 1

Dieses Programm soll prüfen, ob das Alter 21 Jahre oder mehr beträgt.

{:.quiz-code}
. | my $age = 24;
>= { | if $age ␣␣ 21 ␣ | Hier können sowohl `>=` als auch `≥` verwendet werden.
. | &nbsp;&nbsp;&nbsp;&nbsp;sagen &apos;Wir können es Ihnen verkaufen.&apos;;
} | ␣

## 2

In diesem Programm sollen Sie prüfen, ob `$x` zwischen 10 und 15 liegt (ausschließlich der Grenzen).

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