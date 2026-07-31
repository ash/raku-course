---
title: 'Solvo: Kongruigu la tipon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
{
    my $x = 1 / 0;
    say $x;

    CATCH {
        when X::Numeric::DivideByZero {
            say 'cannot divide by zero';
        }
    }
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Eligo

```
cannot divide by zero
```

## Komentoj

1. En Raku, `1 / 0` ne eksplodas tuj; ĝi produktas maldiligentan `Failure`. La escepto estas ĵetata nur, kiam ni *uzas* la valoron, ĉi tie provante `say` ĝin.

1. La ĵetita escepto estas de la enkonstruita tipo `X::Numeric::DivideByZero`, kaj `when X::Numeric::DivideByZero` kongruas kun ĝi precize. Kongrui kun specifa tipo, anstataŭ kapti ĉion per `default`, permesas al vi trakti malsamajn erarojn malsame.

{% include nav.html %}
