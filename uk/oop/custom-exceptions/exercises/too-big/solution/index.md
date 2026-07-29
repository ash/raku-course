---
title: 'Розв''язання: Завелике'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class TooBig is Exception {
    has $.value;
    has $.limit;

    method message {
        "Value $.value exceeds the limit of $.limit";
    }
}

my $limit = 50;

for 30, 99, 60 -> $value {
    TooBig.new(value => $value, limit => $limit).throw if $value > $limit;
    say "Value $value is within the limit";

    CATCH {
        when TooBig {
            say .message;
            say "Try a value up to {.limit}.";
        }
    }
}
```

🦋 Вихідний код можна знайти у файлі [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Вивід

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Коментарі

1. `TooBig is Exception` робить клас винятком, який можна кидати. Він несе дві одиниці даних, `value` та `limit`, а його метод `message` вплітає обидві у повідомлюваний текст.

1. `.throw` здіймає виняток, а `when TooBig` зіставляється з ним за типом. Обробник робить більше, ніж просто виводить повідомлення: він читає атрибут `limit` прямо з перехопленого об'єкта, щоб дати корисну підказку. У цьому й перевага власного винятку над звичайним рядком — обробник отримує структуровані дані, з якими може щось робити.

1. Виняток кидається **лише** тоді, коли `$value > $limit`. Для `30` жодного винятку не здіймається, і тіло циклу доходить до свого `say`, виводячи, що значення в межах межі. Для `99` та `60` спрацьовує `throw`, тож цей `say` пропускається, і натомість справу бере `CATCH`. Тіло `for` саме є тим блоком, який охороняє `CATCH`, тож перехоплений виняток завершує лише поточну ітерацію — далі цикл просто переходить до наступного значення.

{% include nav.html %}
