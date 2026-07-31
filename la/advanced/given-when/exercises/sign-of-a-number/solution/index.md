---
title: 'Solutio: Par, impar, vel nullum'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my $n = 12;

given $n {
    when 0      { say 'zero' }
    when $_ %% 2 { say 'even' }
    default     { say 'odd' }
}
```

🦋 Inveni codicem fontem in archivo [sign-of-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/sign-of-a-number.raku).

## Exitus

```
even
```

## Commentarii

1. `when 0` cum singulo valore zerum congruit. Primus venit quia zerum etiam par est, et volumus eum separatim referre.

1. `when $_ %% 2` est condicio, ubi `$_` est topicum a `given` positum: operator `%%` probat num aequaliter per duo dividatur. Valor `12` non est zerum sed per duo divisibilis est, ergo programma imprimit `even`.

1. `default` omne relictum tegit — numeros qui neque zerum neque pares sunt, id est impares.

{% include nav.html %}
