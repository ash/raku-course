---
title: Методи, извикващи методи
translations_gpt:
---

{% include menu.html %}

Методът може да извика друг метод върху същия обект чрез `self`:

```raku
class Circle {
    has $.radius;

    method area {
        3.14 * $.radius * $.radius;
    }

    method describe {
        'The area is ' ~ self.area;
    }
}

my $c = Circle.new(radius => 2);
say $c.describe; # The area is 12.56
```

Вътре в `describe` извикването `self.area` изпълнява метода `area` върху същата окръжност, а резултатът му се използва за построяване на описанието.

Пишете `self.area` — с точката, — за да извикате метод, точно както външен извикващ би го извикал върху екземпляр, например: `$c.describe`. Това ви позволява да изградите по-сложно поведение от по-малки методи, всеки от които върши по една работа.

{% include nav.html %}
