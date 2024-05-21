---
title: Quiz — Usando la definición de unidad con alcance
---

{% include menu.html %}

## 1

Elige uno de los declaradores para hacer el programa correcto.

{:.quiz-select}
unit | (: mi, multi, unit :) `sub MAIN(Str $name);`
. | `say "Hello, $name!";`

## 2

Diga si el programa es correcto.

```raku
unit sub MAIN(Str $name) {
    say "Hello, $name!";
}
```

{:.quiz-select}
valid | Este programa es&nbsp; (: válido, inválido :) | A pesar de la presencia de `unit`, aún puedes agregar llaves, pero eso es muy redundante.

## 3

¿Es correcto este programa?

```raku
unit multi sub MAIN() {
    say 'Hello, everyone!';
}

unit multi sub MAIN($name) {
    say "Hello, $name!";
}
```

{:.quiz-select}
invalid | Este programa es&nbsp; (: válido, inválido :) | Error: `No se puede usar 'unit' con candidatos multi individuales.`

{% include quiz.html %}

{% include nav.html %}