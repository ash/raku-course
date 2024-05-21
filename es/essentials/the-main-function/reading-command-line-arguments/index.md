---
title: Lectura de argumentos de línea de comandos
---

{% include menu.html %}

La función `MAIN` es útil no solo para localizar el inicio del programa explícitamente, sino también por sus argumentos, que obtienen los valores pasados en la línea de comandos.

Hay dos formas de leer los argumentos de la línea de comandos. Una de ellas es a través del [arreglo `@*ARGS`](/es/essentials/positionals/args-array), que ya hemos utilizado. Ahora examinemos el segundo método.

Considera un programa que suma dos números.

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

Puedes ejecutar el programa de la siguiente manera. El programa imprime la suma de sus dos argumentos:

```console
$ raku t.raku 123 45
168
```

Como cualquier otra función, la función `MAIN` puede tener valores predeterminados para algunos (o incluso todos) de sus argumentos. Por ejemplo:

```raku
sub MAIN($a, $b = 100) {
    say $a + $b;
}
```

Si no se proporciona el segundo argumento, se utiliza el valor predeterminado:

```console
$ raku t.raku 15
115
```

{% include nav.html %}