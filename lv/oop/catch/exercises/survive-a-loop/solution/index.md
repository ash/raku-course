---
title: 'Risinājums: Pārdzīvojiet ciklu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
for 1, 2, 3 -> $n {
    if $n == 2 {
        die "bad: $n";
    }
    say "ok: $n";

    CATCH {
        default {
            say "caught: " ~ .message;
        }
    }
}
```

🦋 Atrodiet programmu failā [survive-a-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/survive-a-loop.raku).

## Izvade

```
ok: 1
caught: bad: 2
ok: 3
```

## Komentāri

1. Fāzeris `CATCH` apstrādā izņēmumu, kas izmests cikla ķermeņa iekšienē, tāpēc `die` otrajā iterācijā tiek noķerts, nevis kļūst liktenīgs.

1. Tiklīdz izņēmums ir apstrādāts, cikls vienkārši turpinās ar nākamo vērtību, un tieši tāpēc `ok: 3` joprojām tiek izdrukāts.

{% include nav.html %}
