---
title: Quomodo Rakudo installare
---

{% include menu.html %}

Ad programmam in Raku exsequendum, necesse est compilatorem habere. Visita [situm Rakudo](https://rakudo.org) ut versionem idoneam pro tuo systemate operante deponas.

Duae sunt optiones principales. Potes compilatorem ipsum installare aut Rakudo Star suite (etiam scriptum Rakudo *) installare. Rakudo Star includit procuratorem fasciculorum et pauca modula utilia.

## Fontes

Potes installer pro tuo systemate apud [rakudo.org/downloads](https://rakudo.org/downloads) deponere. Versiones pro omnibus maioribus systematibus operantibus existunt: Windows, Mac OS, et Linux. Sunt etiam codices fontes quos ipse compilare potes.

## Rakudo Star

Etiam possibile est fasciculum, Rakudo Star, installare, currendo installer quem apud [rakudo.org/star](https://rakudo.org/star) accipis. Versionis numerum antequam id installes inspice. Potes etiam paginam appellatam ‘[3rd-Party Rakudo Star Bundle Packages](https://rakudo.org/star/third-party)’ inspicere ut plures optiones videas.

## Imagines Docker

Rakudo Star ut imago docker praesto est. Uti potes ad programmata currenda et ad parvos scriptores in REPL testa probandos. Omnes instructiones apud [github.com/Raku/docker](https://github.com/Raku/docker) invenies.

## Numeri versionum

Systema numerandi versionum Rakudo numerum versionis format ut numerus bipartitus: annus et mensis diei emissionis. Facile videre potes quam recens sit tuus compilator. Curras sequentem mandatum ut numerum versionis videas:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.
```

Tres numeros versionum hic videre potes. Primus est numerus versionis Rakudo ipsius: `v2020.10`. Deinde venit numerus versionis linguae Raku: `v6.d`. Renovationes nunc litteram proximam ut partem minoris versionis accipient, e.g., `v6.e`, etc. Denique, nomen machinae virtualis in hoc compilatore usae videmus: MoarVM versio `2020.10`.

{% include nav.html %}