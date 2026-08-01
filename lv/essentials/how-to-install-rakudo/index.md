---
title: Kā instalēt Rakudo
translations_gpt:
---

{% include menu.html %}

Lai izpildītu programmu Raku valodā, jums jābūt uzstādītam kompilatoram. Šajā kursā tiek lietots Rakudo; otrs kompilators, [Raku++](/lv/essentials/the-rakupp-compiler), tiek uzstādīts [atsevišķi](/lv/essentials/how-to-install-rakupp). Apmeklējiet [Rakudo tīmekļa vietni](https://rakudo.org), lai lejupielādētu jūsu operētājsistēmai piemēroto versiju.

## Avoti

Uzstādītāju savai sistēmai varat lejupielādēt vietnē [rakudo.org/downloads](https://rakudo.org/downloads). Pastāv versijas visām lielākajām operētājsistēmām: Windows, Mac OS un Linux. Ir arī pirmkodi, kurus varat kompilēt pats.

## Docker attēli

Rakudo ir pieejams arī kā docker attēls. To varat lietot gan programmu izpildei, gan nelielu skriptu izmēģināšanai REPL čaulā. Visas norādes atradīsiet vietnē [github.com/Raku/docker](https://github.com/Raku/docker).

## Versiju numuri

Rakudo versiju numerācijas sistēma veido versijas numuru no divām daļām: izlaiduma gada un mēneša. Tā uzreiz redzat, cik svaigs ir jūsu kompilators. Izpildiet šādu komandrindu, lai redzētu tā versijas numuru:

```console
$ raku -v
Welcome to 𝐑𝐚𝐤𝐮𝐝𝐨™ v2026.06.
Implementing the 𝐑𝐚𝐤𝐮™ programming language v6.d.
Built on MoarVM version 2026.06.
```

Šeit redzami trīs versiju numuri. Pirmais ir paša Rakudo versija: `v2026.06`. Tad nāk Raku valodas versija: `v6.d`. Atjauninājumi pagaidām saņem nākamo burtu kā mazāko versijas daļu, piemēram, `v6.e` un tā tālāk. Visbeidzot redzam virtuālās mašīnas nosaukumu, ko lieto šis kompilators: MoarVM versija `2026.06`.

{% include nav.html %}
