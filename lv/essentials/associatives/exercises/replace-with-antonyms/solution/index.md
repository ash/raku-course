---
title: 'Risinājums: Aizstāt ar antonīmiem'
---

{% include menu.html %}

Lai atrisinātu uzdevumu, faila [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) saturs tiek nokopēts risinājuma failā [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/replace-with-antonyms.raku). Pēc tam cikls pār input argumentiem mēģina atrast vārdu vārdnīcā, un, ja tas izdodas, tiek ņemts antonīms. Ja vārdnīcā šāda vārda nav, tiek izmantots oriģinālais vārds.

## Kods

Risinājums ir parādīts zemāk. Vārdnīca šeit ir parādīta tikai daļēji.

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    'achieve' => 'fail',
    # . . .
    'wrong' => 'right',
    'young' => 'old'    
;

for @*ARGS -> $word {
    say %dictionary{$word} // $word;
}
```

🦋 Atrodiet programmu failā [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/replace-with-antonyms.raku).

## Izvade

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Komentāri

1. `//` operators ir [definētais-vai operators](/lv/essentials/scalar-variables/defined-or-operator), kas atgriež pirmo definēto operandu.
1. Vārdnīcā visi atslēgas vārdi ir vārdi (t.i., tie izskatās kā identifikatori), tāpēc jums nav nepieciešams tos citēt vārdnīcā. Tādējādi ir iespējams izveidot vārdnīcu, kā parādīts zemāk:

```raku
my %dictionary =
    above => 'below',
    absent => 'present',
    achieve => 'fail',
    # . . .
    wrong => 'right',
    young => 'old'    
;
```

{% include nav.html %}