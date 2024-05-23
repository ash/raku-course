---
title: Enigo kun prompto
---

{% include menu.html %}

La malo de `say` estas `prompt`. Ĝi atendas kiam la uzanto enigas ion kaj premas Enter. Poste, ĝi sendas la enigon al la programo kiel ĉenon. Vi povas preni la rezulton de `prompt` kaj transdoni ĝin al `say`. En tiu kazo, vi eĥas tion, kion la uzanto tajpas. Ni kreu tian programon:

```raku
say prompt;
```

Se vi rulas ĉi tiun programon, vi eble konfuziĝos ĉar la programo eniras staton, en kiu ĝi nur atendas iun ajn enigon. Por fari la programon pli uzant-amika, estas bone presi la promptan mesaĝon. Vi ne bezonas aldoni apartan `say`, ĉar vi povas transdoni la mesaĝon al `prompt`:

```raku
prompt 'Kiun lingvon vi intencas lerni? '
```

Antaŭ ol fini ĉi tiun sekcion, ni kombinu ĉiujn partojn kaj kreu programon, kiu demandas pri la deziroj de la uzanto kaj poste presas frazon uzante la tekston, kiun la uzanto enigis.

```raku
say 'Vi intencas lerni ', prompt 'Kiun lingvon vi intencas lerni? ';
```

Se vi enigis `Raku`, vi ricevas la jenan frazon presitan:

    Vi intencas lerni Raku

Bone, ni nun povas paroli al la programo, kaj ni povas fari la programon paroli al ni!

Notu ke ĉar `say` bezonas koni la ĉenojn antaŭ ol presi ilin, Raku unue ekzekutos `prompt`, do la dialogo iras en la ĝusta ordo:

```console
$ raku t.raku 
Kiun lingvon vi intencas lerni? Raku
Vi intencas lerni Raku
```

{% include nav.html %}