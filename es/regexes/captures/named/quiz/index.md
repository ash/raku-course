---
title: Quiz — Capturas
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
if 'ab12cd' ~~ / (\w+) (\d+) / {
    say "$0 $1";
}
```

{:.quiz}
0 | ab 12
1 | ab1 2
0 | ab12 cd
0 | 12 ab

{% include quiz.html %}

<div class="extended-explanation">

El voraz `\w+` empareja caracteres de palabra hasta donde puede, dejando aun así al menos un dígito para `\d+`. Toma `ab1`, y `\d+` empareja entonces el único dígito restante, `2`. Así que `$0` es `ab1` y `$1` es `2`.

</div>

{% include nav.html %}
