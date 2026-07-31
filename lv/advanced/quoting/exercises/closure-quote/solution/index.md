---
title: 'Risinājums: Noslēgums q virknē'
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $x = 10;
say q:c/$x squared is {$x ** 2}/;
```

🦋 Programmas pirmkodu var atrast failā [closure-quote.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/closure-quote.raku).

## Izvade

```
$x squared is 100
```

## Komentāri

1. Adverbs `:c` (slēgums) ieslēdz iegultā `{ … }` koda interpolēšanu citādi burtiskajā `q` formā. Iekavās `$x` ir īsts kods, tāpēc `{$x ** 2}` tiek novērtēts kā `100`.

1. `$x` ārpus iekavām tiek atstāts tieši tā, kā uzrakstīts, jo skalāru adverbs `:s` *nav* ieslēgts. Tāds ir viss adverbu pa funkcijām princips: jūs iegūstat iegultu kodu, neieslēdzot arī `$`-interpolēšanu.

1. Adverbus var kombinēt. Pievienojiet arī `:s`, un vadošais `$x` tiks interpolēts — abas funkcijas tagad ir ieslēgtas vienlaicīgi:

```raku
my $x = 10;
say q:c:s/$x squared is {$x ** 2}/; # 10 squared is 100
```

{% include nav.html %}
