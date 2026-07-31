---
title: La retrodirekta fluo
translations_gpt:
---

{% include menu.html %}

Ĉiu ĝisnuna fluo fluis antaŭen per `==>`, de fonto maldekstre en celon dekstre. Raku havas ankaŭ la spegulan operatoron, `<==`, la **retrodirektan fluon**. Ĝi kuras inverse: la celo sidas **maldekstre**, kaj la datumoj estas tirataj el la fonto **dekstre**.

Jen la ĉenstacio de paraj nombroj el antaŭe, skribita retrodirekte:

```raku
my @evens <== grep(* %% 2) <== (1..10);
say @evens; # [2 4 6 8 10]
```

Legu ĝin de dekstre maldekstren: prenu `1..10`, konservu la parajn nombrojn kaj kolektu ilin en `@evens`. La rezulto estas precize la sama kiel ĉe `(1..10) ==> grep(* %% 2) ==> my @evens` — ŝanĝiĝis nur la direkto, en kiu vi skribas la etapojn.

Retrodirektaj fluoj ĉeniĝas same, kaj denove la celo iras unue:

```raku
my @result <== map(* ** 2) <== grep(* %% 2) <== (1..10);
say @result; # [4 16 36 64 100]
```

La laboro ankoraŭ okazas fonto-unue — komencu per `1..10`, konservu la parajn, kvadratigu ilin — sed sur la paĝo la etapoj estas listigitaj de la celloko reen al la origino. La ordo de la elementoj restas netuŝita; `<==` ŝanĝas nur la legdirekton, neniam la datumojn.

Ĉar kodo kutime legiĝas de maldekstre dekstren, la antaŭendirekta `==>` emas legiĝi pli nature: vi renkontas la datumojn unue kaj sekvas ilin ĝis tie, kien ili alvenas. La retrodirekta `<==` ekzistas por la okazoj, kiam komenci per la celloko rakontas la historion pli bone — nomi *tion, kion vi konstruas*, antaŭ *tio, el kio ĝi estas konstruita*. La du estas precizaj speguloj, do elektu tiun direkton, kiu legiĝas plej bone.

{% include nav.html %}
