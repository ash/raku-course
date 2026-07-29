---
title: 'Решение: Проверете кода на изход'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $proc = run 'sh', '-c', 'exit 4';

say $proc.exitcode;
say $proc ?? 'success' !! 'failure';
```

🦋 Намерете програмата във файла [check-exit-code.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/check-exit-code.raku).

## Изход

```
4
failure
```

## Коментари

1. `run` връща `Proc`. Съхраняването му в `$proc` — и последващото му прочитане — е важно тук: провалила се команда, чийто `Proc` бъде изхвърлен, би хвърлила изключение, но разглеждането на резултата се брои за обработка.

1. `.exitcode` е числото, което командата е върнала: `4`. Проверката на `Proc` като булева стойност отговаря на по-простия въпрос — тя е истина само когато кодът на изход е `0`, така че тук е лъжа и програмата отпечатва `failure`.

{% include nav.html %}
