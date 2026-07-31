---
title: Vairāk par MAIN apakšprogrammām
translations_gpt:
---

{% include menu.html %}

Pamatu daļā jūs izmantojāt `MAIN`, [lai saņemtu komandrindas argumentus](/lv/essentials/the-main-function/reading-command-line-arguments). Raku ap `MAIN` dara jūsu labā vairāk nekā tikai nodod vērtības iekšā.

## Lietošanas paziņojums

Ja komandrindas argumenti neatbilst `MAIN` parakstam, Raku ķermeni neizpilda. Tā vietā tas izdrukā automātiski ģenerētu _lietošanas paziņojumu_, kas apraksta, kā programma jāizsauc.

Ņemiet šo programmu:

```raku
sub MAIN($name) {
    say "Hello, $name!";
}
```

Izsaukta pareizi, tā sasveicinās:

```console
$ raku hello.raku Anna
Hello, Anna!
```

Izsaukta bez argumenta, tā parakstam neatbilst, tāpēc Raku sveiciena vietā izdrukā lietošanas paziņojumu:

```console
$ raku hello.raku
Usage:
  hello.raku <name>
```

Paziņojums tiek uzbūvēts no parametru nosaukumiem, tāpēc jēdzīgi nosaukumi padara palīdzības tekstu noderīgu bez papildu pūlēm.

## Nosaukti argumenti

`MAIN` parametri var būt gan nosaukti, gan pozicionāli. Nosaukts parametrs komandrindā kļūst par slēdzi `--option=value`, un noklusējuma vērtība to padara neobligātu:

```raku
sub MAIN(:$name = 'World') {
    say "Hello, $name!";
}
```

```console
$ raku hello.raku
Hello, World!

$ raku hello.raku --name=Raku
Hello, Raku!
```

{% include nav.html %}
