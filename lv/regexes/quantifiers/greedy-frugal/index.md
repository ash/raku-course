---
title: Mantkārīga un taupīga saskaņošana
translations_gpt:
---

{% include menu.html %}

Pēc noklusējuma kvantors ir _rijīgs_: tas piemeklē tik daudz, cik vien iespējams, joprojām ļaujot izdoties raksturā atlikumam. Aplūkojiet piemeklēšanu no pirmās `<` līdz kādai `>`:

```raku
say '<a><b>' ~~ / '<' .+ '>' /; # ｢<a><b>｣
```

`.+` aprija tik daudz, cik varēja, — līdz pat **pēdējai** `>`, tāpēc sakritība stiepjas pāri abiem iekavu pāriem.

Lai padarītu kvantoru _taupīgu_ (saukts arī par _slinku_ vai _nerijīgu_), aiz tā pievienojiet `?`. Taupīgs kvantors piemeklē tik **maz**, cik iespējams:

```raku
say '<a><b>' ~~ / '<' .+? '>' /; # ｢<a>｣
```

Tagad `.+?` apstājas pie **pirmās** `>`, tāpēc sakrīt tikai pirmais iekavotais gabals.

Piedēklis `?` darbojas ar jebkuru kvantoru: arī `*?` un `**?` ir taupīgi. Rijīgās un taupīgās versijas piemeklē vienādas teksta klases — tās atšķiras tikai ar to, cik daudz paņem, kad ir izvēle.

{% include nav.html %}
