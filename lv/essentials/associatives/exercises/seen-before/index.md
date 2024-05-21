---
title: 'Uzdevums: Redzēts iepriekš?'
---

{% include menu.html %}

## Problēma

Izveidojiet programmu, kas sāk cilpu ar šādām darbībām:

1. Lūdz ievadīt vārdu.
2. Ja vārds jau ir redzēts vienu reizi, izdrukā `Redzēts!`.
3. Ja vārds ir redzēts vairāk nekā vienu reizi, izdrukā `Redzēts 2 reizes!`, utt.
3. Atkārto cilpu.

## Piemērs

Piemērs mijiedarbībai ar programmu:

```console
$ raku seen-before.raku
Vārds: Es
Vārds: nekad
Vārds: neredzēju
Vārds: a
Vārds: neredzēju
Redzēts!
Vārds: to
Vārds: neredzēju
Redzēts 2 reizes!
Patiesi
Vārds: kā
Vārds: to
Redzēts!
Vārds: neredzēju
Redzēts 3 reizes!
Patiesi
Vārds: zāģēja
Vārds: ^C
```

Lai apturētu programmu, nospiediet `Ctrl+C`.

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}