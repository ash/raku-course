---
title: Traits integrados
translations_gpt:
---

{% include menu.html %}

Un _trait_ se aplica con la palabra clave `is` justo después de una declaración. Se ejecuta en tiempo de compilación y cambia alguna propiedad fija del elemento al que está asociado. Raku incluye muchos; ya has utilizado algunos.

Por defecto, los parámetros de una subrutina son de **solo lectura** — no puedes asignarles un valor dentro de la rutina. El trait `is copy` te da una copia privada y modificable del argumento, que puedes cambiar sin afectar al llamador:

```raku
sub greet($name is copy) {
    $name = "dear $name";
    say "Hello, $name!";
}

my $who = 'Anna';
greet($who); # Hello, dear Anna!
say $who;    # Anna — the caller's own variable is untouched
```

El trait `is rw` va más allá: vincula el parámetro a la variable del llamador, de modo que un cambio realizado dentro de la rutina es visible fuera:

```raku
sub bump($n is rw) {
    $n++;
}

my $x = 10;
bump($x);
say $x; # 11
```

Sin uno de estos traits, `$n++` sería un error en tiempo de compilación, porque el parámetro sería de solo lectura.

Otro trait común establece un valor por defecto:

```raku
my $port is default(8080);
say $port; # 8080
```

Aquí `is default` le da a la variable un valor al que recurrir. Cada trait incorporado — `is rw`, `is copy`, `is default`, y más — asocia un comportamiento específico en tiempo de compilación a una declaración. El siguiente tema muestra que los traits no son un conjunto cerrado: [puedes definir los tuyos propios](/es/advanced/traits-pragmas/writing-a-trait).

{% include nav.html %}
