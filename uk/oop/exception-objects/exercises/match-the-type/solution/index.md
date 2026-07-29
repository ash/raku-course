---
title: 'Розв''язання: Зіставте тип'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

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

🦋 Вихідний код можна знайти у файлі [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Вивід

```
cannot divide by zero
```

## Коментарі

1. У Raku `1 / 0` не вибухає одразу; воно дає лінивий `Failure`. Виняток кидається лише тоді, коли ми *використовуємо* це значення, — тут через спробу зробити `say`.

1. Кинутий виняток має вбудований тип `X::Numeric::DivideByZero`, і `when X::Numeric::DivideByZero` зіставляється з ним точно. Зіставлення з конкретним типом, замість перехоплення всього через `default`, дозволяє обробляти різні помилки по-різному.

{% include nav.html %}
