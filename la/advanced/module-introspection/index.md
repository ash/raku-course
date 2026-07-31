---
title: Introspectio modulorum
translations_gpt: true
---

{% include menu.html %}

Nomen moduli _fasciculum_ introducit — spatium nominum quod nomina in eo definita continet. Antea, in [sectione de continentibus](/la/advanced/containers), `WHO` cognovisti, quod `Stash` (tabulam symbolorum) fasciculi reddit. Introspectio moduli hoc in usum ponit.

Exempla infra modulum `Greeting` adhibent, qui in prioribus argumentis constructus est — subroutina exportata et variabilis communis `our`:

```raku
unit module Greeting;

our $version = '1.0';

sub hello($name) is export {
    return "Hello, $name!";
}
```

Fasciculus moduli cum `::` postposito scribitur. Addendo `.keys` nomina quae continet enumerat:

```raku
use Greeting;

say Greeting::.keys.sort; # ($version EXPORT)
```

Modulus `Greeting` ex prioribus argumentis variabilem `our`, `$version`, definit, itaque fasciculus eius illud nomen continet — cum sigillo incluso. Iuxta id sedet `EXPORT`, quod mirum videri potest. Est fasciculus quem Raku automatice creat ad omnia quae modulus `is export` notat continenda, sicut subroutinam `hello`. Nomen exportatum igitur _non_ directe in fasciculo apparet; intra illum sub-fasciculum `EXPORT` habitat. (Claves nullo ordine fixo redeunt, itaque exemplum eas ordinat ad stabile resultat obtinendum.)

Nomen etiam in fasciculo quaerere potes eo ut clave utaris. Hoc eundem valorem attingit ac qualificatum `$Greeting::version`:

```raku
use Greeting;

say Greeting::{'$version'}; # 1.0
```

## Enumeratio eorum quae modulus exportat

Fasciculus `EXPORT` supra visus est locus ubi nomina exportata re vera habitant, itaque ea enumerare potes unum gradum profundius inspiciendo. Exportata sine indice in gregem `DEFAULT` ineunt (vide [Indices exportationis](/la/advanced/modules-basics/export-tags)), et eius `.keys` sunt subroutinae exportatae:

```raku
use Greeting;

say Greeting::EXPORT::DEFAULT::.keys.sort; # (&hello)
```

Quaeque clavis nomen exportatum cum sigillo suo est — hic unica subroutina `&hello`, cum `&` quod routinam designat ostensa. Hoc modo cognoscere potes quid modulus utentibus suis praebeat sine eius fonte legendo: eius fasciculum `EXPORT::DEFAULT` interroga quid contineat.

Fasciculum hoc modo introspicere utile est cum vis cognoscere quid modulus praebeat, vel eius nomina dynamice attingere potius quam unumquodque in fonte scribere.

{% include nav.html %}
