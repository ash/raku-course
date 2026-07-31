---
title: Excepciones propias
translations_gpt:
---

{% include menu.html %}

Además de las excepciones incorporadas `X::`, puedes definir las tuyas. Una excepción personalizada es una clase que hereda de la clase incorporada `Exception` y aporta un método `message`:

```raku
class TooBig is Exception {
    has $.value;

    method message {
        "Value $.value is too big";
    }
}
```

`TooBig` es una clase normal — puede tener atributos como `value` —, pero como es `is Exception`, se puede lanzar. La lanzas creando un objeto y llamándole `.throw`:

```raku
my $value = 20 * 30;

TooBig.new(value => $value).throw if $value > 50;

CATCH {
    when TooBig {
        say .message;
    }
}
```

El programa imprime:

```
Value 600 is too big
```

Dentro del `CATCH`, `when TooBig` coincide porque el objeto lanzado es de ese tipo. Una excepción personalizada lleva consigo los datos que le des (aquí, el `value`), de modo que el manejador puede construir un mensaje preciso o reaccionar de una forma concreta, mucho más útil que una simple cadena pasada a `die`.

Esto reúne todo lo de esta parte: una excepción personalizada es una _clase_ (con atributos y un método) que participa en la maquinaria de las excepciones, lista para señalar exactamente qué salió mal.

{% include nav.html %}
