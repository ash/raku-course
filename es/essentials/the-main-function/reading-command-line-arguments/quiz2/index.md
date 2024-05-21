---
title: Quiz 2 — Valores predeterminados
---

{% include menu.html %}

Considera el siguiente programa.

```raku
sub MAIN($a = 'abc', $b = 'def') {
    say $a;
    say $b;
}
```

## 1

¿Qué imprime si se ejecuta como se muestra a continuación?

```console
$ raku t.raku
```

{:.quiz-code .nocode}
abc def | Introduce los valores de salida: ␣␣␣ y ␣␣␣

## 2

Ahora, el mismo programa se ejecuta como:

```console
$ raku t.raku xyz
```

{:.quiz-code .nocode}
xyz def | Introduce los valores de salida: ␣␣␣ y ␣␣␣

## 3

Finalmente, este comando:

```console
$ raku t.raku xyz 123
```

{:.quiz-code .nocode}
xyz 123 | Introduce los valores de salida: ␣␣␣ y ␣␣␣

{% include quiz.html %}

{% include nav.html %}