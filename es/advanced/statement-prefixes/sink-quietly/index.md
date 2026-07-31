---
title: sink y quietly
translations_gpt:
---

{% include menu.html %}

Dos prefijos más se ocupan de ejecutar código por sus efectos en lugar de por su valor.

El prefijo `sink` evalúa algo en _contexto sink_ (de hundimiento), puramente por sus efectos secundarios, descartando el resultado. Es útil con una operación perezosa que quieres forzar a ejecutarse:

```raku
sink (1..3).map({ print "$_ " });
print "\n"; # 1 2 3
```

El `map` aquí se ejecuta solo por la impresión que realiza; `sink` se asegura de que realmente se ejecute y descarta la lista resultante. Sin forzarlo, un `map` perezoso cuyo resultado nunca se usa podría no ejecutarse en absoluto.

El prefijo `quietly` ejecuta un bloque con sus **advertencias suprimidas**. El código que normalmente imprimiría una advertencia en el flujo de error permanece en silencio:

```raku
my $value;
quietly {
    say $value + 1; # 1, with no "uninitialized value" warning
}
```

Sumar `1` a un `$value` indefinido normalmente advierte sobre el uso de un valor no inicializado, pero dentro de `quietly` esa advertencia se oculta. Úsalo cuando a propósito hagas algo que genera advertencias y no quieras el ruido, pero con moderación, ya que las advertencias generalmente señalan un error real.

{% include nav.html %}
