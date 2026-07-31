---
title: 'Solvo: Libro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 Vi povas trovi la fontkodon en la dosiero [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Eligo

```
Raku by Larry
```

## Komentoj

1. Ĉiu `has $.title` kaj `has $.author` deklaras atributon kune kun lega atingilo.

1. Ambaŭ atingiloj estas uzataj ene de unu ĉeno kun duoblaj citiloj. Ĉiu estas envolvita en kurbaj krampoj — `{$b.title}` kaj `{$b.author}` — kio estas la kod-interpolada formo: kio ajn estas en la krampoj estas rulata kaj ĝia rezulto enmetata, do la atingiloj estas vokataj kaj iliaj valoroj metataj en la ĉenon.

1. Ambaŭ atributoj estas ĉenoj, do estus saĝe deklari ilin tiel.

{% include nav.html %}
