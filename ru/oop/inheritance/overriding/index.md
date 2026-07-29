---
title: Переопределение методов
translations_gpt:
---

{% include menu.html %}

Дочерний класс может предоставить собственную версию унаследованного метода. Это называется
_переопределением_. Когда метод вызывается у объекта дочернего класса, выполняется версия
потомка, а не родителя.

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
    method intro {
        "$.name says " ~ self.speak;
    }
}

class Dog is Animal {
    method speak {
        'Woof';
    }
}

class Cat is Animal {
    method speak {
        'Meow';
    }
}
```

`Dog` и `Cat` каждый переопределяют `speak`. Метод `intro`, унаследованный от `Animal`
без изменений, вызывает `self.speak` — и этот вызов использует тот `speak`, который принадлежит
самому объекту:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

Итак, один и тот же унаследованный `intro` даёт разные результаты, потому что каждый объект
приносит собственный `speak`. Это одна из центральных идей объектно-ориентированного
программирования: общий код, который подстраивается под конкретный вид объекта, с которым
работает.

{% include nav.html %}
