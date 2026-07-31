---
title: 'Risinājums: Formatēts teksts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 Atrodiet programmu failā [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku).

## Izvade

Palaidiet ar `raku --doc`:

```
Greeting

Hello, world!
```

## Komentāri

1. `B<world>` atzīmē vārdu treknrakstā; vienkārša teksta atveidojumā tas parādās kā parasts teksts, taču bagātāki formāti to rāda treknrakstā.

1. `raku --doc` atveido Pod, neizpildot nevienu programmas koda rindu.

1. Lai treknrakstu patiešām *ieraudzītu*, atveidojiet formātā, kas nes noformējumu. Instalējiet atveidotāju, piemēram, `Pod::To::HTML`, ar `zef install Pod::To::HTML` un pēc tam palaidiet `raku --doc=HTML formatted-text.raku`; vārds tagad iznāk ietīts HTML elementā `<b>`. Turpretī parastajai `--doc` teksta izvadei nav nekāda veida, kā parādīt treknrakstu, tiklīdz tā ierakstīta failā vai cauruļvadā.

{% include nav.html %}
