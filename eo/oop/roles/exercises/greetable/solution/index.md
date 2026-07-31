---
title: 'Solvo: Skatolo kun grandeco'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [greetable.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/greetable.raku).

## Eligo

```
size is 10
True
```

## Komentoj

1. La rolo provizas la metodon `describe`, kaj la klaso kunmetas ĝin per `does Sized`. La metodo dependas de `self.size`, kiun provizas la klaso `Box` — la rolo kaj la klaso kunefikas por formi la kompletan objekton.

1. Ĉar `Box` faras la rolon, la saĝa kongruado `$b ~~ Sized` estas `True`: objekto estas rekonata kiel havanta ĉiun rolon, kiun ĝia klaso kunmetas, kio estas utila por kontroli, kion objekto povas fari, antaŭ ol voki metodon de rolo.

{% include nav.html %}
