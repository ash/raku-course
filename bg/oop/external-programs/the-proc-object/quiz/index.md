---
title: 'Тест — Обектът Proc'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my $proc = run 'sh', '-c', 'exit 2', :out;
$proc.out.slurp(:close);
say $proc.exitcode;
```

{:.quiz}
0 | 0
1 | 2
0 | True
0 | грешка

{% include quiz.html %}

<div class="extended-explanation">

`.exitcode` е цялото число, което програмата е върнала — тук на обвивката е казано `exit 2`, така че то е `2`. Програмата не хвърля изключение: провалилият се `Proc` е съхранен в `$proc` и разгледан с `.exitcode`, а гледането на резултата се брои за обработка. (Изключение би възникнало само ако провалил се `Proc` бъде изхвърлен непроверен.)

</div>

{% include nav.html %}
