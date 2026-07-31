---
title: Tempore exsecutionis onerare
translations_gpt:
---

{% include menu.html %}

## Problema

Datur tibi modulus `Greeting.rakumod` qui subprogramma `hello` exportat:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Onera hunc modulum per `require` loco `use`, ita ut **tempore exsecutionis** adducatur. Quia `require` nomina sponte non importat, symbolum quod vis enumera per `require Greeting <&hello>;`. Deinde voca `hello('Sam')` et effectum imprime.

Ut ostendas quid oneratio tempore exsecutionis tibi praestet, pone `require` intra `sub MAIN` cum vexillo `--quiet`, ita ut modulus *solum* tunc oneretur cum salutatio revera desideratur. Cum `--quiet`, programma `Silence.` imprimit et modulum omnino non tangit.

## Exemplum

Cursum cum modulo in semita quaesitionis, programma imprimit:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
