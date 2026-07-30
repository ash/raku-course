---
title: 'Oplossing: Twee keer toepassen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 Je kunt de broncode vinden in het bestand [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Uitvoer

```
18
```

## Opmerkingen

1. De parameter `&f` ontvangt een subroutine; de binnenste `f($x)` wordt aan de buitenste `f(...)` gevoerd.

1. `2` verdrievoudigen geeft `6`, en nog eens verdrievoudigen geeft `18`.

{% include nav.html %}
