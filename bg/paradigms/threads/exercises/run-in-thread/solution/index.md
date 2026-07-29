---
title: 'Решение: Изпълнете в нишка'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 Намерете програмата във файла [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Изход

```
working
```

## Коментари

1. `Thread.start` изпълнява блока в нова нишка.

1. `.finish` изчаква нишката да приключи, така че програмата не завършва, преди да се отпечата `working`.

{% include nav.html %}
