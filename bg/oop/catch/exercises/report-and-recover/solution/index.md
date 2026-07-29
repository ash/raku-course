---
title: 'Решение: Докладвайте и се възстановете'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my $timeout = 30;

{
    die 'config missing';
    $timeout = 60;

    CATCH {
        default {
            say "warning: {.message}; keeping default";
        }
    }
}

say "timeout is $timeout seconds";
```

🦋 Намерете програмата във файла [report-and-recover.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/report-and-recover.raku).

## Изход

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Коментари

1. Когато `die` хвърли, остатъкът от блока се изоставя — така че редът `$timeout = 60` изобщо не се изпълнява и `$timeout` запазва стойността си по подразбиране `30`.

1. `CATCH` обработва изключението (отпечатвайки предупреждение), така че програмата не спира. Тя продължава със стойността по подразбиране, а точно това означава *възстановяване* от грешка: отбележи проблема, върни се към нещо безопасно и продължи.

{% include nav.html %}
