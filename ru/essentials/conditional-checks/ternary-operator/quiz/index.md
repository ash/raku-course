---
title: 'Тест: Тернарный оператор'
---

{% include menu.html %}

Заполните пробелы в программе:

{:.quiz-code}
. | my $color = prompt &apos;What colour is it? &apos;;
?? | say $color eq &apos;blue&apos; ␣␣
!! | &nbsp;&nbsp;&nbsp;&nbsp;&apos;This is a sky!&apos; ␣␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;&apos;I need more information.&apos;;

{% include quiz.html %}

## Комментарии

В компиляторе Rakudo есть особое сообщение об ошибке для самого частого случая,
где вы можете допустить ошибку с тернарным оператором в Raku:

```
===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
Unsupported use of ?  and : for the ternary conditional operator.  In
Raku please use: ??  and !!.
at /Users/ash/raku-course/t.raku:2
------> say $color eq 'blue' ?⏏ 'This is a sky!' : 'I need more informa
```

{% assign human=1 %}
{% include nav.html %}
