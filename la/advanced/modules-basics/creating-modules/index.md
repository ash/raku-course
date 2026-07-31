---
title: Modulos creare
translations_gpt:
---

{% include menu.html %}

Cum programmata crescunt, iuvat ea in partes reusabiles dividere. _Modulus_ est unitas codicis, in proprio archivo servata, quam alia programmata onerare et adhibere possunt.

Archivum moduli extensionem `.rakumod` habet et incipit modulum per `unit module` nominans. Subprogrammata quae intus scribis ex more privata sunt; ut unum codici qui modulo utitur praesto sit, illud proprietate `is export` nota.

Ecce modulus in archivo `Greeting.rakumod` servatus:

```raku
unit module Greeting;

sub hello($name) is export {
    return "Hello, $name!";
}
```

Subprogramma `hello` `is export` fert, itaque cuilibet programmati quod modulo utitur conspicuum erit. Subprogramma sine `is export` modulo privatum maneret.

Modulus etiam data per variabiles `our` communicare potest, quae per nomen moduli attingi possunt. Numerum versionis ad `Greeting` addere tam facile est quam unam lineam in archivo apponere:

```raku
our $version = '1.0';
```

Hac linea in `Greeting.rakumod` posita, valor ut `$Greeting::version` praesto est ubicumque modulus oneratur.

Argumenta sequentia ostendunt [quomodo programma talem modulum oneret](/la/advanced/modules-basics/using-modules) et quid exacte ex eo accipiat.

{% include nav.html %}
