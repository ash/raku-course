---
title: 'Risinājums: Pārāk liels'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class TooBig is Exception {
    has $.value;
    has $.limit;

    method message {
        "Value $.value exceeds the limit of $.limit";
    }
}

my $limit = 50;

for 30, 99, 60 -> $value {
    TooBig.new(value => $value, limit => $limit).throw if $value > $limit;
    say "Value $value is within the limit";

    CATCH {
        when TooBig {
            say .message;
            say "Try a value up to {.limit}.";
        }
    }
}
```

🦋 Atrodiet programmu failā [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Izvade

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Komentāri

1. `TooBig is Exception` padara klasi par izmetamu izņēmumu. Tā nes divus datu gabalus `value` un `limit`, un tās metode `message` abus iepin ziņotajā tekstā.

1. `.throw` ceļ izņēmumu, un `when TooBig` tam atbilst pēc tipa. Apstrādātājs dara vairāk nekā tikai izdrukā paziņojumu: tas nolasa atribūtu `limit` tieši no noķertā objekta, lai dotu noderīgu norādi. Tieši ar to paša definēts izņēmums ir pārāks par vienkāršu virkni — apstrādātājs saņem strukturētus datus, ar ko var rīkoties.

1. Izņēmums tiek izmests **tikai** tad, kad `$value > $limit`. Vērtībai `30` izņēmums netiek celts un cikla ķermenis izpildās līdz savam `say`, izdrukājot, ka vērtība ir robežas ietvaros. Vērtībām `99` un `60` `throw` nostrādā, tāpēc šis `say` tiek izlaists un tā vietā to apstrādā `CATCH`. Cikla ķermenis pats ir tas bloks, ko `CATCH` sargā, tāpēc noķerts izņēmums beidz tikai pašreizējo iterāciju — cikls tad vienkārši virzās uz nākamo vērtību.

{% include nav.html %}
