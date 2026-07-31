---
title: 'Risinājums: Absolūtā vērtība'
translations_gpt:
---

{% include menu.html %}

Šeit ir viens no iespējamiem uzdevuma atrisinājumiem.

## Kods

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 Šīs programmas pirmkodu var atrast failā [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Izvade

```
7
4
```

## Komentāri

1. Pirmais kandidāts atbilst tikai negatīviem skaitļiem un atgriež apgriezto vērtību, kas ir pozitīva.

1. Katrs cits skaitlis — nulle un pozitīvie — nonāk pie otrā kandidāta, kas atgriež vērtību nemainītu.

{% include nav.html %}
