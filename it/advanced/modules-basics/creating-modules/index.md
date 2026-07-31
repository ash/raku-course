---
title: Creare moduli
translations_gpt: Creare moduli
---

{% include menu.html %}

Man mano che i programmi crescono, e utile suddividerli in parti riutilizzabili. Un _modulo_ e un'unita di codice, conservata in un proprio file, che altri programmi possono caricare e utilizzare.

Un file di modulo ha l'estensione `.rakumod` e inizia nominando il modulo con `unit module`. Le subroutine che scrivi al suo interno sono private per impostazione predefinita; per renderne una disponibile al codice che usa il modulo, contrassegnala con il tratto `is export`.

Ecco un modulo salvato in un file chiamato `Greeting.rakumod`:

```raku
unit module Greeting;

sub hello($name) is export {
    return "Hello, $name!";
}
```

La subroutine `hello` porta `is export`, quindi sara visibile a qualsiasi programma che usi il modulo. Una subroutine senza `is export` rimarrebbe privata del modulo.

Un modulo puo anche condividere dati tramite variabili `our`, che diventano raggiungibili attraverso il nome del modulo. Aggiungere un numero di versione a `Greeting` e semplice come una riga in piu nel file:

```raku
our $version = '1.0';
```

Con quella riga in `Greeting.rakumod`, il valore e disponibile come `$Greeting::version` ovunque il modulo sia caricato.

I prossimi argomenti mostrano [come un programma carica un tale modulo](/it/advanced/modules-basics/using-modules) e cosa esattamente ottiene da esso.

{% include nav.html %}
