---
title: Bases numéricas
---

{% include menu.html %}

Un literal entero no tiene que estar escrito en el sistema decimal. Raku entiende las tres bases alternativas más comunes de forma nativa, cada una con su propio prefijo:

```raku
say 0xFF;   # 255  — hexadecimal (base 16)
say 0b1010; # 10   — binario (base 2)
say 0o17;   # 15   — octal (base 8)
```

Independientemente de la base que uses en el código fuente, el valor es el mismo entero; solo cambia la notación.

Para cualquier otra base, usa la forma de raíz `:base<número>`:

```raku
say :16<FF>;   # 255
say :2<1010>;  # 10
```

Para hacer lo contrario — de un número a su representación en otra base — llama al método `base`. Devuelve una cadena de dígitos:

```raku
say 255.base(16); # FF
say 10.base(2);   # 1010
```

{% include nav.html %}
