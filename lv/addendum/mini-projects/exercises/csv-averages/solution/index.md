---
title: 'Risinājums: Vērtējumi no CSV rindām'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @lines = 'Anna,90', 'Bob,72', 'Cara,84';
my %score;

for @lines -> $line {
    my ($name, $mark) = $line.split(',');
    %score{$name} = $mark.Int;
}

my $average = ([+] %score.values) / %score.elems;
say "average: $average";

say "above average:";
for %score.sort -> $pair {
    say "  {$pair.key}" if $pair.value > $average;
}
```

🦋 Atrodiet programmu failā [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Izvade

```
average: 82
above average:
  Anna
  Cara
```

## Komentāri

1. Katras rindas sadalīšana pēc komata un piešķiršana `($name, $mark)` abus laukus
izsaiņo uzreiz; `.Int` vērtējuma tekstu pārvērš skaitlī.

1. Vidējais ir vērtību summa, dalīta ar to skaitu; tiek uzskaitīts ikviens, kura
vērtējums to pārspēj. Šeit vidējais iznāk apaļš `82`.

1. Šo pēdējo ciklu var uzrakstīt kā konveijeru. `sort` sakārto pārus, `grep`
patur tos, kas ir virs vidējā, un `map` katru izdzīvojušo pāri sarauj līdz tā
vārdam — tā cikla ķermenī nav nekādas loģikas, tikai izdrukāšana:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    Lasot no kreisās uz labo, tas pasaka tieši to, ko dara: sakārto, paturi tos,
kas virs vidējā, paņem to vārdus. Katrs posms ir mazs, patstāvīgs solis, un
`*.value` / `*.key` ir [Whatever zvaigznītes](/lv/advanced/whatever), kas uz vietas
uzbūvē viena argumenta bloku.

{% include nav.html %}
