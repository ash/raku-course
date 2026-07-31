---
title: 'Solvo: Aldonu metodon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Dog {
    has $.name;
}

Dog.^add_method('speak', method { $.name ~ ' says woof' });

say Dog.new(name => 'Rex').speak;
```

🦋 Vi povas trovi la fontkodon en la dosiero [add-a-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/add-a-method.raku).

## Eligo

```
Rex says woof
```

## Komentoj

1. `.^add_method` alfiksas novan metodon al la metaobjekto de la klaso je rultempe, donitan kiel anonima `method { … }`.

1. La aldonita metodo estas vera metodo de la klaso, do ene de ĝi `$.name` atingas la atributon `name` de la objekto, ĝuste kiel metodo skribita en la klasan korpon farus. Post la voko, ĉiu `Dog` respondas al `.speak`.

{% include nav.html %}
