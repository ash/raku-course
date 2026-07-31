---
title: 'Risinājums: Sagaidiet kļūmi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $p = start { die 'boom' };

try {
    await $p;
    CATCH {
        default { say "caught: {.message}" }
    }
}
```

🦋 Atrodiet programmu failā [await-failure.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-failure.raku).

## Izvade

```
caught: boom
```

## Komentāri

1. Solījuma bloks met izņēmumu, tāpēc solījums ir *lauzts*. Izņēmums nepazūd — tas tiek turēts, līdz kāds solījumu sagaida.

1. `await $p` to pārmet turpat, kur `CATCH` fāzeris to apstrādā kā jebkuru parastu izņēmumu. Šādi fona darba kļūdas parādās tur, kur jūs gaidāt rezultātu.

{% include nav.html %}
