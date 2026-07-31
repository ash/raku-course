---
title: 'Risinājums: Saskaņojiet tipu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [match-the-type.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/match-the-type.raku).

## Izvade

```
cannot divide by zero
```

## Komentāri

1. Raku valodā `1 / 0` neuzsprāgst uzreiz; tas rada slinku `Failure`. Izņēmums tiek izmests tikai tad, kad vērtību *izmantojam*, — šeit, mēģinot to `say`.

1. Izmestais izņēmums ir iebūvētā tipa `X::Numeric::DivideByZero`, un `when X::Numeric::DivideByZero` tam precīzi atbilst. Piemeklējot konkrētu tipu, nevis noķerot visu ar `default`, dažādas kļūdas var apstrādāt dažādi.

{% include nav.html %}
