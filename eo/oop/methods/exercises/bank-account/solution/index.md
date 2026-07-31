---
title: 'Solvo: Marŝanta roboto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Robot {
    has $.position is rw = 0;

    method move($steps = 1) {
        $.position += $steps;
    }
}

my $r = Robot.new;
$r.move(5);
$r.move;
$r.move(2);

say $r.position;
```

🦋 Vi povas trovi la fontkodon en la dosiero [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/bank-account.raku).

## Eligo

```
8
```

## Komentoj

1. La atributo `position` estas `is rw`, por ke la metodo povu ŝanĝi ĝin, kaj ĝi defaŭltas al `0`, do freŝa roboto komenciĝas ĉe la origino.

1. La metodo `move` donas al sia parametro defaŭltan valoron, `$steps = 1`. La nuda voko `$r.move` do antaŭeniras je unu paŝo, dum `$r.move(5)` kaj `$r.move(2)` antaŭeniras je la donita kvanto. La tri vokoj aldonas `5 + 1 + 2`, do la fina pozicio estas `8`.

{% include nav.html %}
