---
title: 'Решение: Кутия с размер'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [greetable.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/greetable.raku).

## Изход

```
size is 10
True
```

## Коментари

1. Ролята предоставя метода `describe`, а класът го компонира с `does Sized`. Методът разчита на `self.size`, който се доставя от класа `Box` — ролята и класът се сглобяват, за да образуват завършения обект.

1. Понеже `Box` изпълнява ролята, интелигентното съпоставяне `$b ~~ Sized` дава `True`: обектът се разпознава като притежаващ всяка роля, която класът му компонира, а това е полезно, за да проверите какво може даден обект, преди да извикате метод на ролята.

{% include nav.html %}
