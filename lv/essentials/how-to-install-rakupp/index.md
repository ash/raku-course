---
title: Kā uzstādīt Raku++ 🆕
translations_gpt:
---

{% include menu.html %}

Raku++ tiek izplatīts caur savu GitHub repozitoriju [github.com/ash/rakupp](https://github.com/ash/rakupp). Instalējot to, jūs iegūstat vienu izpildāmo failu ar nosaukumu `rakupp`.

## Binārie faili

Gatavi pašreizējā izlaiduma binārie faili ir pieejami Windows, macOS un Linux videi. Lejupielādējiet savai operētājsistēmai atbilstošo no repozitorija izlaidumu lappuses — nekas cits nav jāiestata, jo Raku++ nav atsevišķas virtuālās mašīnas, ko instalēt.

## Būvēšana no pirmkoda

Tā kā Raku++ ir uzrakstīts C++ valodā, to var arī uzbūvēt pašam no repozitorijā esošā pirmkoda. Repozitorijā ir paskaidrots, kādi rīki nepieciešami un kā to kompilēt.

## Versiju numuri

Kāda versija jums ir, var pārbaudīt ar opciju `--version`:

```console
$ rakupp --version
Raku++ (rakupp) 1.5.2 — a Raku interpreter and compiler in C++ (implements Raku 6.d, with 6.e features)
```

Rinda pasaka, kurš ir paša Raku++ izlaidums (`1.5.2`) un uz kuru Raku valodas versiju tas tēmē (`6.d` ar dažām `6.e` iespējām). Salīdziniet to ar Rakudo versijas paziņojumu [Rakudo instalēšanas lappusē](/lv/essentials/how-to-install-rakudo), lai redzētu, kā abi kompilatori sevi pieteic.

{% include nav.html %}
