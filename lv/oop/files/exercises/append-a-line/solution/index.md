---
title: 'Risinājums: Izveidojiet žurnālu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
spurt 'log.txt', "start\n";

for 1..3 -> $i {
    spurt 'log.txt', "entry $i\n", :append;
}

print slurp 'log.txt';
```

🦋 Atrodiet programmu failā [append-a-line.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/files/append-a-line.raku).

## Izvade

```
start
entry 1
entry 2
entry 3
```

## Komentāri

1. Pirmais `spurt` izveido failu no jauna ar rindu `start`.

1. Katrs `spurt` cikla iekšienē izmanto `:append`, tāpēc tas savu rindu pievieno aiz esošā satura, nevis aizstāj failu. Tieši tā aug žurnālfails: katra iterācija (vai katra programmas palaišanas reize) piekabina beigās vēl vienu rindu.

1. Bez `:append` katrs piegājiens failu pārrakstītu un izdzīvotu tikai pēdējā rinda.

{% include nav.html %}
