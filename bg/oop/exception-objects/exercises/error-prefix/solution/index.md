---
title: 'Решение: Представка към съобщението'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
{
    die 'timeout';

    CATCH {
        default {
            say 'Error: ' ~ .message;
        }
    }
}
```

🦋 Намерете програмата във файла [error-prefix.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/error-prefix.raku).

## Изход

```
Error: timeout
```

## Коментари

1. `.message` на обекта на изключението дава текста, подаден на `die`.

1. Долепянето му след `Error: ` изгражда крайния ред. Обектът на изключението е просто стойност, така че можете да използвате съобщението му както пожелаете.

{% include nav.html %}
