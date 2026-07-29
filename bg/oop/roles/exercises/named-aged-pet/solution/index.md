---
title: 'Решение: Домашен любимец с име и възраст'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
role Named {
    method label {
        'I am ' ~ self.name;
    }
}

role Aged {
    method status {
        self.age ~ ' years';
    }
}

class Pet does Named does Aged {
    has $.name;
    has $.age;
}

my $p = Pet.new(name => 'Rex', age => 3);
say $p.label;
say $p.status;
```

🦋 Намерете програмата във файла [named-aged-pet.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/named-aged-pet.raku).

## Изход

```
I am Rex
3 years
```

## Коментари

1. `Pet` компонира две роли наведнъж и получава и метода `label`, и метода `status`.

1. Методът на всяка роля използва атрибут (`name` или `age`), който класът `Pet` предоставя.

{% include nav.html %}
