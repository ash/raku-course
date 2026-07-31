---
title: 'Risinājums: Atslābināt strict'
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
no strict;

$a = 10;
$b = 20;
say $a + $b;
```

🦋 Programmas pirmkodu var atrast failā [no-strict.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/no-strict.raku).

## Izvade

```
30
```

## Komentāri

1. `no strict` izslēdz prasību, ka mainīgie jādeklarē, tāpēc `$a` un `$b` var tikt piešķirti bez `my`. Ar noklusēto `strict` katra no šīm rindām būtu kompilēšanas laika kļūda.

1. Pēc piešķiršanas mainīgie darbojas normāli, tāpēc `$a + $b` ir `30`. Atslābinājums ir leksisks — tas ilgst tikai līdz tā tvēruma beigām, kurā `no strict` parādās.

1. Šī ir demonstrācija, nevis ieteicama prakse: `strict` ir ieslēgta pēc noklusējuma pamatota iemesla dēļ — tā uztver pārrakstīšanās kļūdas mainīgo nosaukumos kompilēšanas laikā. Reālā kodā atstājiet to ieslēgtu un deklarējiet savus mainīgos ar `my`.

{% include nav.html %}
