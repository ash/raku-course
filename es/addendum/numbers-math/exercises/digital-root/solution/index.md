---
title: 'Solución: Raíz digital'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $n = 987654;

while $n >= 10 {
    $n = [+] $n.comb;
}

say $n;
```

🦋 Puedes encontrar el código fuente en el archivo [digital-root.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/digital-root.raku).

## Salida

```
3
```

## Comentarios

1. `$n.comb` parte el número en sus caracteres de dígito individuales; `[+]` los suma,
convirtiendo automáticamente las cadenas en números.

1. El bucle se repite mientras el resultado siga teniendo más de un dígito, así que se
detiene en cuanto `$n` baja de `10`.

{% include nav.html %}
