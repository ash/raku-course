---
title: 'Решение: Фигуры с общей ролью'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Вывод

```
Circle: 12.56636
Square: 9
```

## Комментарии

1. Строго говоря, вызов `$shape.area` сработал бы и *без* всякой роли. Raku разрешает методы
по имени в момент вызова, поэтому, пока у каждого объекта случайно есть метод `area`, цикл
работает, — это известно как *утиная типизация*. Что же тогда даёт нам здесь роль? Две гарантии.

1. **Роль — это тип, который можно потребовать.** `describe` объявлена как
`sub describe(Shape $shape)`, поэтому она принимает только объекты, исполняющие `Shape`,
и отвергает всё прочее *ещё до выполнения тела*. Передайте ей обычное число — и программа
откажется компилироваться:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Без роли такого типа просто нет: подпрограмма с утиной типизацией приняла бы любой аргумент
и рухнула бы лишь позже, глубоко внутри, добравшись до `.area`.

1. **Роль — это договор.** Объявление `area` заглушкой (`method area { ... }`) обязывает каждый
класс, исполняющий роль, предоставить собственный `area`. Забудьте о нём — и ошибка не сможет
остаться незамеченной:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo сообщает о недостающем методе сразу при *композиции* класса — программа отказывается
компилироваться ещё до того, как появится хоть один объект `Triangle`. И даже в реализации,
которая приняла бы такое определение класса, ошибка всплывёт самое позднее при использовании
метода: унаследованная от роли заглушка `{ ... }` — это настоящий код, который умирает
с `Stub code executed`, как только кто-нибудь её вызовет.

1. `$shape.^name` спрашивает у объекта имя его класса, поэтому одна и та же `describe` верно
подписывает каждый результат, не зная типа заранее.

{% include nav.html %}
