---
title: Наследяване
translations_gpt:
---

{% include menu.html %}

_Наследяването_ позволява един клас да се надгради над друг. Клас, деклариран с `is` след името си, наследява атрибутите и методите на класа, който назовава — своя _родителски_ (или _базов_) клас.

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
}

class Dog is Animal {
}
```

`Dog is Animal` означава, че `Dog` е вид `Animal`. Без да е написано нищо ново, `Dog` вече има атрибута `name` и метода `speak` от `Animal`:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.name;  # Rex
say $rex.speak; # some sound
```

Обект `Dog` се разпознава и като `Animal`:

```raku
say Dog.new ~~ Animal; # True
```

Интелигентното съпоставяне `~~` срещу тип е истина, когато обектът е от този тип или наследява от него. Следващата тема показва как дъщерен клас може да замени наследен метод със своя собствена версия.

{% include nav.html %}
