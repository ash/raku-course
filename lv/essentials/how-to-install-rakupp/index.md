---
title: Kā uzstādīt Raku++ 🆕
translations_gpt:
---

{% include menu.html %}

Raku++ tiek izplatīts caur savu tīmekļa vietni [raku.online](https://raku.online) un savu GitHub repozitoriju [github.com/ash/rakupp](https://github.com/ash/rakupp). Instalējot to, jūs iegūstat vienu izpildāmo failu ar nosaukumu `rakupp` — nekas cits nav jāiestata, jo Raku++ nav atsevišķas virtuālās mašīnas, ko instalēt.

## Uzstādītājs

macOS, Linux un BSD sistēmās viena komanda lejupielādē jūsu datoram atbilstošo būvējumu, pārbauda to un padara `rakupp` pieejamu caur jūsu `PATH`. Administratora tiesības tam nav vajadzīgas:

```console
$ curl -fsSL https://raku.online/install.sh | sh
```

Windows sistēmā tā vietā izpildiet šo PowerShell logā vai lejupielādējiet instalēšanas vedni `rakupp-setup-windows-x64.exe` no repozitorija izlaidumu lappuses:

```console
> irm https://raku.online/install-windows.ps1 | iex
```

Uzstādītājs pajautā, vai vēlaties Raku++ arī ar nosaukumu `raku`. Pēc tam atveriet jaunu termināli, lai jaunais `PATH` stātos spēkā. Vēlāk `rakupp upgrade` to aizstāj ar jaunāko izlaidumu.

## Citi instalēšanas veidi

* macOS sistēmā ar Homebrew: `brew tap ash/rakupp && brew install rakupp`.
* Ar Docker, neko neinstalējot: `docker run --rm -it ghcr.io/ash/rakupp` palaiž interaktīvo REPL.
* Gatavi arhīvi katrai platformai ir atrodami repozitorija izlaidumu lappusē.
* Tā kā Raku++ ir uzrakstīts C++ valodā, to var arī uzbūvēt pašam no pirmkoda; repozitorijā ir paskaidrots, kādi rīki nepieciešami.

## Versiju numuri

Kāda versija jums ir, var pārbaudīt ar opciju `--version`:

```console
$ rakupp --version
Raku++ 5.4.1 (2026-10-13) arm64-darwin
```

Rinda pasaka, kurš ir paša Raku++ izlaidums (`5.4.1`), kurā datumā tas uzbūvēts un kurai platformai binārais fails paredzēts. Raku valodas versija ir cita lieta, un to varat pajautāt pašai valodai:

```console
$ rakupp -e 'say $*RAKU.version'
v6.d
```

Salīdziniet to ar Rakudo versijas paziņojumu [Rakudo instalēšanas lappusē](/lv/essentials/how-to-install-rakudo), lai redzētu, kā abi kompilatori sevi pieteic.

{% include nav.html %}
