---
title: Успадкування
translations_gpt:
---

{% include menu.html %}

_Успадкування_ дозволяє одному класу будуватися на іншому. Клас, оголошений з `is` після свого імені, успадковує атрибути й методи названого класу — свого _батьківського_ (або _базового_) класу.

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

`Dog is Animal` означає, що `Dog` є різновидом `Animal`. Не написавши нічого нового, `Dog` уже має атрибут `name` і метод `speak` від `Animal`:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.name;  # Rex
say $rex.speak; # some sound
```

Об'єкт `Dog` розпізнається також і як `Animal`:

```raku
say Dog.new ~~ Animal; # True
```

Розумне зіставлення `~~` з типом істинне, коли об'єкт належить до цього типу або успадковує від нього. Наступна тема показує, як дочірній клас може замінити успадкований метод власною версією.

{% include nav.html %}
