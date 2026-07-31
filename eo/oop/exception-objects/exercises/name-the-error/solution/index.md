---
title: 'Solvo: Nomu la eraron'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub risky {
    die 'sub failed';
}

{
    risky();

    CATCH {
        default {
            say .^name;
            say .message;
        }
    }
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [name-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/name-the-error.raku).

## Eligo

```
X::AdHoc
sub failed
```

## Komentoj

1. La `die` okazas ene de `risky`, sed la escepto vojaĝas supren al la vokanto. La `CATCH` en la bloko, kiu vokis `risky`, traktas ĝin, kio estas la maniero, kiel erartraktado normale funkcias: la misfunkcio kaj ĝia traktilo ne devas esti en la sama rutino.

1. Simpla `die` kun ĉeno kreas escepton `X::AdHoc`, kiun `.^name` raportas, kaj `.message` redonas la tekston, kiu estis transdonita al `die`.

{% include nav.html %}
