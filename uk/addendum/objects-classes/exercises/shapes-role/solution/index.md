---
title: Розв'язання вправи «Фігури зі спільною роллю»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
role Shape {
    method area { ... }
}

class Circle does Shape {
    has $.radius;
    method area { 3.14159 * $.radius ** 2 }
}

class Square does Shape {
    has $.side;
    method area { $.side ** 2 }
}

sub describe(Shape $shape) {
    say "{$shape.^name}: {$shape.area}";
}

for Circle.new(radius => 2), Square.new(side => 3) -> $shape {
    describe($shape);
}
```

🦋 Знайдіть програму у файлі [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Вивід

```
Circle: 12.56636
Square: 9
```

## Коментарі

1. Строго кажучи, виклик `$shape.area` спрацював би й *без* жодної ролі. Raku
розв'язує методи за іменем у мить виклику, тож поки кожен об'єкт випадково має
метод `area`, цикл працює, — це відоме як *качина типізація*. То що ж роль
насправді нам тут дає? Дві гарантії.

1. **Роль є типом, який можна вимагати.** `describe` оголошено як
`sub describe(Shape $shape)`, тож вона приймає лише об'єкти, що виконують `Shape`,
і відхиляє все інше *ще до виконання тіла*. Передайте їй звичайне число — і
програма відмовиться компілюватися:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Без ролі такого типу немає — качино типізована процедура прийняла б будь-який
аргумент і луснула б лише пізніше, десь глибоко всередині, коли дійшла б до `.area`.

1. **Роль є контрактом.** Оголошення `area` як заглушки (`method area { ... }`)
змушує кожен клас, що виконує роль, надати власний `area`. Забудьте його — і
помилка не пройде непоміченою:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo повідомляє про відсутній метод одразу, щойно клас *скомпоновано*, —
програма відмовляється компілюватися ще до того, як існуватиме бодай один об'єкт
`Triangle`. І навіть у реалізації, що прийняла б це означення класу, помилка
виринає щонайпізніше тоді, коли метод використають: заглушка `{ ... }`,
успадкована від ролі, є справжнім кодом, що помирає з `Stub code executed`,
щойно її хтось викличе.

1. `$shape.^name` питає в об'єкта ім'я його класу, тож той самий `describe`
правильно підписує кожен результат, не знаючи типу наперед.

{% include nav.html %}
