---
title: Nosauciet kļūdu
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Uzrakstiet apakšprogrammu `risky`, kas dara `die 'sub failed'`. Pēc tam izsauciet to no bloka, kuram ir fāzeris `CATCH`. `CATCH` jāizdrukā izņēmuma tipa nosaukums (ar `.^name`) un pēc tam tā paziņojums (ar `.message`). Tas parāda, ka `CATCH` apstrādā izņēmumus, ko izmet kods, kuru bloks *izsauc*, nevis tikai `die`, kas uzrakstīts pašā blokā.

## Piemērs

Programma izdrukā:

```
X::AdHoc
sub failed
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
