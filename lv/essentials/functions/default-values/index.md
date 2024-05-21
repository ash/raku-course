---
title: Noklusējuma vērtības
---

{% include menu.html %}

Gan pozicionālajiem, gan nosauktajiem parametriem var būt noklusējuma vērtības. Ja funkcijai ir noklusējuma vērtība dotajam parametram, šo parametru var izlaist, izsaucot funkciju.

## Pozicionālie parametri

Piemērs funkcijai ar pozicionālajiem parametriem un noklusējuma vērtību:

```raku
sub greet($name = 'World') {
    say "Hello, $name!";
}

greet('Merinda');
greet();
```

Pirmajā izsaukumā tiek izmantots vārds, kas nodots kā vienīgais arguments, un tādējādi tiek izdrukāts `Hello, Merinda!`. Otrajā izsaukumā tiek izmantota noklusējuma vērtība un tiek izdrukāts `Hello, World!`.

Ja funkcijai ir vairāk nekā viens parametrs, tad noklusējuma vērtības var izmantot tikai saraksta beigās:

```raku
sub f($a, $b, $c = 42, $d = 50) { . . . } # pareizi
# sub f($a = 10, $b = 20, $c, $d) { . . . } # NEPAREIZI
```

## Nosauktie parametri

Tā pati sintakse tiek izmantota noklusējuma vērtību iestatīšanai nosauktajiem parametriem:

```raku
sub greet(:$name = 'World') {
    say "Hello, $name!";
}

greet(name => 'Merinda'); # Hello, Merinda!
greet(); # Hello, World!
```

Nosaukto parametru secība nav svarīga, tāpēc jebkuram no tiem var būt noklusējuma vērtības, pat pirmajam sarakstā:

```raku
sub greet(:$greeting = 'Hello', :$name) {
    say "$greeting, $name!";
}

greet(name => 'Alla'); # Hello, Alla!
```

{% include nav.html %}