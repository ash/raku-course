---
title: 'Risinājums: Neapstrādāta virkne'
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say Q{$x and \n};
```

🦋 Programmas pirmkodu var atrast failā [raw-string.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/raw-string.raku).

## Izvade

```
$x and \n
```

## Komentāri

1. `Q` ir visburtiskākā citēšanas forma: tā neko neinterpolē un neapstrādā nekādas aizbēgšanas secības.

1. Tāpēc `$x` paliek kā teksts un `\n` paliek kā atpakaļsvītra un burts `n`.

{% include nav.html %}
