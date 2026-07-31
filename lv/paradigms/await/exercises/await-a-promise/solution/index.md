---
title: 'Risinājums: Sagaidiet solījumu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 Atrodiet programmu failā [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Izvade

```
(slow quick medium)
```

## Komentāri

1. Visi trīs darbi sākas uzreiz un guļ vienlaikus, tāpēc visa programma aizņem apmēram `0.3` sekundes — lēnākā darba ilgumu, nevis visu trīs summu.

1. Lai gan `quick` pabeidz pirmais un `slow` pēdējais, izvade ir `(slow quick medium)`: `await` katru rezultātu atgriež tajā pašā vietā, kur tā solījums `@jobs` sarakstā. Pabeigšanas secība ietekmē tikai to, *kad* `await` atgriežas, nekad ne rezultātu izkārtojumu.

{% include nav.html %}
