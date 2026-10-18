---
title: Raku, Rakudo et Raku++
translations_gpt:
---

{% include menu.html %}

**Raku** nomen linguae programmandi est, **compilator** autem programma quod codicem tuum legit eumque exsequitur. Raku uni compilatori non alligatur: hic cursus **Rakudo** adhibet, firmatum, sed sunt etiam recentiores — **Raku++** et **mutsu**.

## Plus quam unus compilator

Ratio linguae Raku non praescribit quo compilatore utendum sit. Documentis rationis adiungitur series probationum cui nomen Roast; compilatorem scribere cuivis licet, et si eas probationes transit, compilator Raku est.

Diu Rakudo sola implementatio matura fuit, sed id iam non ita est. Mense Iulio anni 2026 alter compilator apparuit — **Raku++** (cuius programma exsecutabile `rakupp` nominatur), in C++ scriptus. Versio eius 5.4.1 totam seriem Roast transit, et ipse mirabiliter celeriter incipit. Hic cursus in exemplis Rakudo adhibet; quod tamen discis ipsa lingua Raku est, cuius paene omnia immutata etiam in Raku++ currunt. Paginae sequentes hos duos compilatores — Rakudo et Raku++ — vicissim spectant, et quomodo eos installes.

Est etiam tertia implementatio: **mutsu**, interpres in Rust a Tokuhiro Matsuno scriptus. Raku in bytecode pro machina virtuali propria compilat, atque etiam intra navigatrum interretiale per WebAssembly currit — situs eius interretialis institutionem Raku et palaestram super eum aedificatas praebet. mutsu adhuc strenue evolvitur et, auctoris sui verbis, nondum ad usum in productione aptus est, quamquam iam paene omnia archiva probationum Roast transit.

## Nexus externi

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ in GitHub](https://github.com/ash/rakupp)
* [mutsu](https://tokuhirom.github.io/mutsu/)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
