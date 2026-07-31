---
title: Uzi modulojn
---

{% include menu.html %}

Por uzi modulon, ŝargu ĝin per la deklaro `use`. Post tio, la nomoj, kiujn la modulo eksportas, estas disponeblaj kvazaŭ vi mem skribis ilin.

Donita la dosiero `Greeting.rakumod` el la antaŭa temo, programo uzas ĝin jene:

```raku
use Greeting;

say hello('Anna');
```

Ĉar `hello` estis markita per `is export`, la deklaro `use` faras ĝin disponebla, kaj la programo vokas ĝin rekte:

```
Hello, Anna!
```

Por ke Raku trovu la modulon, ĝi devas esti sur la modula serĉvojo. Kiam la moduldosiero troviĝas en la sama dosierujo kiel via programo, vi diras al Raku serĉi tie per la opcio `-I.` (la punkto signifas "la aktuala dosierujo"):

```console
$ raku -I. program.raku
Hello, Anna!
```

Instalitaj moduloj (kovritaj poste en [Instalado de moduloj el la reto](/eo/advanced/installing-modules)) estas trovitaj aŭtomate, do la opcio `-I` estas bezonata nur por moduloj, kiuj loĝas apud via propra programo.

{% include nav.html %}
