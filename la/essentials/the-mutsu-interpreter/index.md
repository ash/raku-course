---
title: Interpres mutsu
translations_gpt:
---

{% include menu.html %}

**mutsu** est tertia implementatio Raku, in **Rust** a Tokuhiro Matsuno scripta. Sicut Rakudo, programma tuum in bytecode compilat et in machina virtuali exsequitur — sed machina virtualis eius propria est, in programmate exsecutabili `mutsu` inclusa, non MoarVM.

mutsu Raku 6.d implet et adhuc strenue evolvitur. Auctor eius aperte dicit eum nondum ad usum in productione aptum esse, sed iam paene omnia archiva probationum Roast transit, itaque paene omnia programmata huius cursus immutata in eo currunt.

Unus defectus, dum discis, momenti est: quaedam examinationes tempore compilationis adhuc desunt. Maxime conspicue, in versione 0.24.0 mutsu variabilem quam declarare oblitus es non nuntiat antequam programma currit, sicut Rakudo et Raku++ faciunt. Cum cursus talem nuntium erroris ostendit, illud exemplum cum uno ex aliis duobus compilatoribus experire.

## Raku in navigatro interretiali

mutsu etiam in WebAssembly compilari potest, ita ut intra paginam interretialem currat. Situs eius interretialis, [tokuhirom.github.io/mutsu](https://tokuhirom.github.io/mutsu/), hoc adhibet ad introductionem in Raku Anglice et Iaponice scriptam, ad institutionem practicam, et ad palaestram ubi Raku exsequi potes nihil installans — omnia in illis paginis ipso mutsu currunt.

## Moduli

mutsu propriam copiam instrumenti moderandi modulos zef secum affert, nomine `mzef`, ita ut moduli Raku ei more solito installari possint, per `mzef install` cum nomine moduli subsequente.

## Codex fons

mutsu fontis aperti est. Eum, una cum binariis emissis et praeceptis aedificandi, invenies apud [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu).

{% include nav.html %}
