---
title: Kā uzstādīt mutsu
translations_gpt:
---

{% include menu.html %}

mutsu publicē gatavus būvējumus macOS un Linux sistēmām — gan Intel/AMD, gan ARM procesoriem — sava GitHub repozitorija [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu) izlaidumu lappusē. Katrā būvējumā ir divi izpildāmie faili: pats `mutsu` un `mzef`, tā pakotņu pārvaldnieks.

## Ar mise

Vienkāršākais veids, kā instalēt izlaidumu, ir [mise](https://mise.jdx.dev/) — rīks, kas instalē un atjaunina izstrādātāju rīkus. Viena komanda lejupielādē jūsu datoram atbilstošo būvējumu un padara gan `mutsu`, gan `mzef` pieejamus caur jūsu `PATH`:

```console
$ mise use -g github:tokuhirom/mutsu
```

## Ar Docker

Jebkurā sistēmā, kurā darbojas Docker, arī Windows, mutsu var lietot, to neinstalējot. Šī komanda palaiž interaktīvo REPL:

```console
$ docker run --rm -it ghcr.io/tokuhirom/mutsu
```

Bet šī izpilda programmu no pašreizējā direktorija:

```console
$ docker run --rm -v "$PWD:/work:ro" ghcr.io/tokuhirom/mutsu mutsu hello.raku
```

## Būvēšana no pirmkoda

mutsu ir uzrakstīts Rust valodā, tāpēc to var arī uzbūvēt pašam ar Cargo no pirmkoda, kas atrodas tā repozitorijā; sīkāk tas ir paskaidrots repozitorijā.

## Versiju numuri

Kāda versija jums ir, var pārbaudīt ar opciju `--version`:

```console
$ mutsu --version
mutsu 0.24.0
```

Tas ir paša mutsu izlaidums. Tāpat kā ar pārējiem kompilatoriem, Raku valodas versiju varat pajautāt pašai valodai:

```console
$ mutsu -e 'say $*RAKU.version'
v6.d
```

Salīdziniet to ar to, kā sevi piesaka [Rakudo](/lv/essentials/how-to-install-rakudo) un [Raku++](/lv/essentials/how-to-install-rakupp).

{% include nav.html %}
