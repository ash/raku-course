---
title: Перевизначення методів
translations_gpt:
---

{% include menu.html %}

Дочірній клас може надати власну версію успадкованого методу. Це називають _перевизначенням_. Коли метод викликають для об'єкта дочірнього класу, виконується версія дитини, а не батька.

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

`Dog` і `Cat` кожен перевизначає `speak`. Метод `intro`, успадкований від `Animal` без змін, викликає `self.speak` — і цей виклик використовує той `speak`, який належить справжньому об'єктові:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

Отже, той самий успадкований `intro` дає різні результати, бо кожен об'єкт приносить власний `speak`. Це одна з центральних ідей об'єктно-орієнтованого програмування: спільний код, який пристосовується до конкретного роду об'єкта, з яким працює.

{% include nav.html %}
