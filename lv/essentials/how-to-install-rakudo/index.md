---
title: Kā instalēt Rakudo
---

{% include menu.html %}

Lai izpildītu programmu Raku valodā, jums ir jābūt instalētam kompilatoram. Apmeklējiet [Rakudo mājaslapu](https://rakudo.org), lai lejupielādētu versiju, kas ir piemērota jūsu operētājsistēmai.

Ir divas galvenās iespējas. Jūs varat instalēt tikai kompilatoru vai instalēt Rakudo Star komplektu (arī rakstīts kā Rakudo *). Rakudo Star ietver pakotņu pārvaldnieku un dažus noderīgus moduļus.

## Avoti

Jūs varat lejupielādēt instalētāju jūsu sistēmai [rakudo.org/downloads](https://rakudo.org/downloads). Ir pieejamas versijas visām galvenajām operētājsistēmām: Windows, Mac OS un Linux. Ir pieejami arī pirmkodi, kurus varat kompilēt pats.

## Rakudo Star

Ir iespējams arī instalēt komplektu, Rakudo Star, palaidot instalētāju, kuru iegūstat [rakudo.org/star](https://rakudo.org/star). Pirms instalēšanas pārbaudiet versijas numuru. Jūs varat arī apskatīt lapu ar nosaukumu ‘[3rd-Party Rakudo Star Bundle Packages](https://rakudo.org/star/third-party)’, lai redzētu vairāk iespēju.

## Docker attēli

Rakudo Star ir pieejams kā docker attēls. Jūs varat to izmantot gan programmu izpildei, gan mazu skriptu testēšanai REPL čaulā. Visas instrukcijas atradīsiet [github.com/Raku/docker](https://github.com/Raku/docker).

## Versiju numuri

Rakudo versiju numurēšanas sistēma veido versijas numuru kā divdaļīgu numuru: gads un mēnesis izlaišanas datumā. Jūs viegli varat redzēt, cik svaigs ir jūsu kompilators. Izpildiet šādu komandrindu, lai redzētu tā versijas numuru:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2020.10.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2020.10.
```

Šeit jūs varat redzēt trīs versiju numurus. Pirmais ir pašas Rakudo versija: `v2020.10`. Tad nāk Raku valodas versija: `v6.d`. Atjauninājumi pašlaik iegūs nākamo burtu kā mazāko versijas daļu, piemēram, `v6.e` utt. Visbeidzot, mēs redzam virtuālās mašīnas nosaukumu, kas tiek izmantota šajā kompilatorā: MoarVM versija `2020.10`.

{% include nav.html %}