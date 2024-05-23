---
title: Variabla interpolado en Raku-ŝnuroj
---

{% include menu.html %}

Ĉu vi jam rimarkis en la antaŭaj sekcioj, ke kelkfoje la ŝnuroj estis cititaj en unuopaj, sed kelkfoje en duoblaj citiloj? La diferenco estas esenca.

Kompreneble, vi povas uzi duoblajn citilojn se vi volas meti unuopan citilon ene de la ŝnuro kun minimuma peno:

```raku
say "O'Henry";
```

Cetere, estas ankoraŭ pli bone uzi ĝustan apostrofon anstataŭ unuopan citilon ĉar [Raku estas bona pri Unikodo](../../on-unicode).

```raku
say 'O’Henry';
```

Sed la vera potenco de duoblaj citiloj estas ilia kapablo _interpoli_ variablojn kaj—kiel ni baldaŭ vidos—ekzekuti kodon! Ekzamenigu la sekvan programon:

```raku
my $name = 'Karl';
say "Hello, $name!";
```

Kiel vi eble atendis, la programo presas `Hello, Karl!`. La nomo de la variablo `$name` (kune kun ĝia sigelo `$`) estis anstataŭigita per la valoro de la variablo.

La variablo estis interpolita kun la valoro, kiun la variablo havis en la momento de interpolado, do se vi ŝanĝas la enhavon de `$name` kaj interpolas ĝin denove, la nova valoro estos anstataŭigita. Ni testu ĝin:

```raku
my $name = 'Karl';
say "Hello, $name!";

$name = 'Anna';
say "Hello, $name!";
```

La sama ŝnuro generas malsamajn mesaĝojn ĉi-foje:

    Hello, Karl!
    Hello, Anna!

{% include nav.html %}