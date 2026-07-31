---
title: Export pittacia
translations_gpt:
---

{% include menu.html %}

Subprogramma `is export` notans illud in gregem exportationis _praedefinitum_ moduli ponis — nomina quae simplex `use` adducit. Dando `is export` _tesseram_, exportationes in greges nominatos disponere potes et unicuique programmati permittere ut seriem quam vult eligat.

Tessera in parenthesibus post `is export` scribitur:

```raku
unit module Greeting;

sub hello($name)   is export            { "Hello, $name!" }
sub goodbye($name) is export(:partings) { "Goodbye, $name!" }
```

`hello` tesseram non habet, itaque ad gregem praedefinitum pertinet; `goodbye` tessera `:partings` notatum est.

Simplex `use` solum gregem praedefinitum importat:

```raku
use Greeting;      # hello praesto est; goodbye non est
```

Tesseram nominans illum gregem loco eius importas — et, fortasse mirum, _non_ etiam praedefinitum:

```raku
use Greeting :partings; # goodbye praesto est; hello non est
```

`:partings` petens exacte illum gregem accipis. Ut omnia quae modulus exportat adducas, utere tessera inbuilta `:ALL`:

```raku
use Greeting :ALL; # et hello et goodbye
```

Duae tesserae speciales cognoscendae sunt. `:ALL` ab omni modulo sustinetur et omnes eius exportationes importat. `:MANDATORY` est ea quam in proceduram ponere potes quae importanda est quamcumque tesseram vocans eligat.

Unaquaeque tessera revera est fasciculus intra fasciculum `EXPORT` moduli — `Greeting::EXPORT::partings`, exempli gratia — quod exacte est id quod [introspectio modulorum](/la/advanced/module-introspection) enumerat. Tesserae maiori modulo permittunt ut superficiem praedefinitam parvam servet dum facultates additicias ad petitionem tamen offert.

{% include nav.html %}
