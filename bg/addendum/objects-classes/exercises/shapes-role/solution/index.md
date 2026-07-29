---
title: 'Решение: Фигури със споделена роля'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [shapes-role.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/shapes-role.raku).

## Изход

```
Circle: 12.56636
Square: 9
```

## Коментари

1. Строго погледнато, извикването `$shape.area` би работило и *без* никаква роля. Raku
разрешава методите по име в мига на извикването, така че докато всеки обект случайно има
метод `area`, цикълът върви — това е известно като *патешко типизиране*. Тогава какво
всъщност ни носи ролята тук? Две гаранции.

1. **Ролята е тип, който можете да изисквате.** `describe` е обявена като
`sub describe(Shape $shape)`, така че тя приема само обекти, изпълняващи `Shape`, и
отхвърля всичко останало *още преди тялото да се изпълни*. Подайте ѝ обикновено число и
програмата отказва да се компилира:

    ```raku
    describe(42);
    # Calling describe(Int) will never work with declared signature (Shape $shape)
    ```

    Без ролята такъв тип няма — патешко типизирана процедура би приела всякакъв
аргумент и би гръмнала едва по-късно, дълбоко вътре, когато стигне до `.area`.

1. **Ролята е договор.** Обявяването на `area` като заглушка (`method area { ... }`)
принуждава всеки клас, който изпълнява ролята, да достави свой собствен `area`. Забравете
го и грешката не може да мине незабелязана:

    ```raku
    class Triangle does Shape {
        has $.base;
        has $.height;
    }
    # Method 'area' must be implemented by Triangle because it is required by roles: Shape.

    my $t = Triangle.new(base => 3, height => 4);
    say $t.area; # Stub code executed
    ```

    Rakudo съобщава за липсващия метод веднага щом класът бъде *композиран* — програмата
отказва да се компилира още преди да съществува дори един обект `Triangle`. И дори в
реализация, която би приела това определение на класа, грешката изплува най-късно когато
методът бъде използван: заглушката `{ ... }`, наследена от ролята, е истински код, който
умира със `Stub code executed`, щом някой я извика.

1. `$shape.^name` пита обекта за името на класа му, така че един и същ `describe`
надписва всеки резултат правилно, без да знае типа предварително.

{% include nav.html %}
