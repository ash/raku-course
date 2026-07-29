---
title: 'Решение: Назовете грешката'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub risky {
    die 'sub failed';
}

{
    risky();

    CATCH {
        default {
            say .^name;
            say .message;
        }
    }
}
```

🦋 Намерете програмата във файла [name-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/name-the-error.raku).

## Изход

```
X::AdHoc
sub failed
```

## Коментари

1. `die` се случва вътре в `risky`, но изключението пътува нагоре към извикващия. `CATCH` в блока, който е извикал `risky`, го обработва — и точно така обикновено работи обработката на грешки: провалът и обработващият го не е нужно да са в една и съща процедура.

1. Обикновен `die` с низ създава изключение `X::AdHoc`, което `.^name` съобщава, а `.message` връща текста, подаден на `die`.

{% include nav.html %}
