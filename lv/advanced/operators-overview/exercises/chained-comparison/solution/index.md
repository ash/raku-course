---
title: 'Risinājums: Ķēdēts salīdzinājums'
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
say 0 <= 73 <= 100;
```

🦋 Programmas pirmkodu var atrast failā [chained-comparison.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/chained-comparison.raku).

## Izvade

```
True
```

## Komentāri

1. Salīdzināšanas operatorus var ķēdēt, tāpēc `0 <= 73 <= 100` lasās kā "0 ir ne lielāks par 73, un 73 ir ne lielāks par 100". Operators `<=` iekļauj galapunktus, tāpēc arī tieši `0` vai `100` tiktu uzskatīts par derīgu.

1. Abas daļas ir patiesas, tāpēc visa izteiksme ir `True`. Ievērojiet, ka vidējā vērtība `73` ir rakstīta tikai vienu reizi, kaut arī tā tiek salīdzināta ar abiem kaimiņiem.

1. Bez ķēdēšanas iespējas jums būtu jāuzraksta abas salīdzināšanas un jāsavieno ar `&&`, atkārtojot vidējo vērtību: `0 <= 73 && 73 <= 100`. Ķēdētā forma izsaka to pašu kodolīgāk.

{% include nav.html %}
