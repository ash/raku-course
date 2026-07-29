---
title: 'Решение: Съпоставете типа'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
{
    my $x = 1 / 0;
    say $x;

    CATCH {
        when X::Numeric::DivideByZero {
            say 'cannot divide by zero';
        }
    }
}
```

🦋 Намерете програмата във файла [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Изход

```
cannot divide by zero
```

## Коментари

1. В Raku `1 / 0` не гърми незабавно; той произвежда мързелив `Failure`. Изключението се хвърля едва когато *използваме* стойността — тук при опита да я подадем на `say`.

1. Хвърленото изключение е от вградения тип `X::Numeric::DivideByZero`, а `when X::Numeric::DivideByZero` го съпоставя точно. Съпоставянето по конкретен тип, вместо прихващането на всичко с `default`, ви позволява да обработвате различните грешки по различен начин.

{% include nav.html %}
