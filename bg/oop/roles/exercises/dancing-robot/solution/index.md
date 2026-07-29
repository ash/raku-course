---
title: 'Решение: Танцуващ робот'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
role Dancing {
    method dance {
        'spinning around';
    }
}

class Robot {
    method speak {
        'beep';
    }
}

my $plain   = Robot.new;
my $dancing = Robot.new but Dancing;

say $plain.speak;
say $dancing.speak;
say $dancing.dance;
```

🦋 Намерете програмата във файла [dancing-robot.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/dancing-robot.raku).

## Изход

```
beep
beep
spinning around
```

## Коментари

1. За разлика от предишните примери, `Dancing` не заменя съществуващ метод — тя донася чисто нов метод `dance`, за който `Robot` не знае нищо.

1. `Robot.new but Dancing` вмесва ролята в един-единствен обект по време на изпълнение, така че `$dancing` може и да `speak` (от класа), и да `dance` (от ролята). Обикновеният `$plain` е научил само `speak`.

1. Допълнителната способност принадлежи на този един обект, а не на класа `Robot`. Извикването на `$plain.dance` би било грешка, защото `$plain` така и не е получил ролята.

{% include nav.html %}
