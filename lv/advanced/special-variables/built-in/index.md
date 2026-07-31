---
title: Iebūvētie speciālie mainīgie
translations_gpt:
---

{% include menu.html %}

Raku jums iepriekš definē virkni mainīgo. Vairums no tiem ir _dinamiski_ (tvigils `*`), tāpēc — kā redzējāt pie [dinamiskajiem mainīgajiem](/lv/advanced/special-variables/dynamic-variables) — tos var nolasīt jebkur un pat pārmākt kādam redzamības apgabalam. Lūk, tie, pie kuriem ķersieties visbiežāk.

## Standarta plūsmas

Ievade un izvade plūst caur trim dinamiskiem mainīgajiem: `$*OUT` (standarta izvade), `$*ERR` (standarta kļūdas) un `$*IN` (standarta ievade). `say` un `print` raksta uz `$*OUT`; lai tekstu tā vietā nosūtītu uz standarta kļūdām, izsauciet metodi uz `$*ERR`:

```raku
$*OUT.say('normal output'); # goes to standard output
$*ERR.say('a diagnostic');  # goes to standard error
```

Tā kā tie ir dinamiski, `$*OUT` novirzīšana blokā nosūta uz jauno galamērķi visu, ko izvada šajā blokā izsauktais kods, — neko no šī koda nemainot.

## Programma un tās process

Daži mainīgie apraksta pašu darbojošos programmu:

```raku
say $*PROGRAM-NAME; # the path of the script being run
say $*PID;          # the process id of this program
say $*CWD;          # the current working directory
```

To vērtības katrā palaišanas reizē mainās, tāpēc noteikta izvade šeit nav parādīta.

## Komandrinda un vide

Argumenti un vide pienāk divos gatavos konteineros:

* `@*ARGS` — komandrindas argumentu saraksts (tie paši, ko saņem apakšprogramma `MAIN`)
* `%*ENV` — vides mainīgie kā jauktenis

```raku
say @*ARGS.elems; # how many arguments were passed
say %*ENV<HOME>;  # the value of the HOME environment variable
```

Šie iebūvētie mainīgie pasargā jūs no to pašu ziņu savākšanas ar roku. Un, tā kā tie ir dinamiski un tiek meklēti caur izsaukumu steku, jebkuru `$*` iebūvēto mainīgo var pārmākt kādam redzamības apgabalam tieši tāpat kā savu paša `$*` mainīgo.

Līdzās šiem dinamiskajiem mainīgajiem Raku ir arī kompilēšanas laika `?` iebūvētie mainīgie — `$?FILE` un `$?LINE` —, ar kuriem jau iepazināties [tvigilu](/lv/advanced/special-variables/twigils) lappusē.

{% include nav.html %}
