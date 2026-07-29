---
title: 'Розв''язання: Коробка з розміром'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
role Sized {
    method describe {
        'size is ' ~ self.size;
    }
}

class Box does Sized {
    has $.size;
}

my $b = Box.new(size => 10);
say $b.describe;
say $b ~~ Sized;
```

🦋 Вихідний код можна знайти у файлі [greetable.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/greetable.raku).

## Вивід

```
size is 10
True
```

## Коментарі

1. Роль надає метод `describe`, а клас компонує її через `does Sized`. Метод спирається на `self.size`, який постачає клас `Box`, — роль і клас складаються докупи, утворюючи повний об'єкт.

1. Оскільки `Box` виконує роль, розумне зіставлення `$b ~~ Sized` дає `True`: об'єкт розпізнається як такий, що має кожну роль, скомпоновану його класом, і це стає в пригоді, щоб перевірити, що об'єкт уміє, перш ніж викликати метод ролі.

{% include nav.html %}
