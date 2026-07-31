---
title: 'Risinājums: Summēt visus argumentus'
translations_gpt:
---

{% include menu.html %}

Seit ir iespejams uzdevuma risinajums.

## Kods

```raku
sub total(*@nums) {
    [+] @nums
}

say total(3, 5, 7);
```

🦋 Pirmkodu var atrast faila [sum-all-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/sum-all-arguments.raku).

## Izvade

```
15
```

## Komentari

1. Uzsucosais parametrs `*@nums` savac visus argumentus masiva `@nums`, neatkarigi no to skaita.

1. Redukcijas meta-operators `[+]` tos visus saskaita kopa, iegustot `15`.

{% include nav.html %}
