---
title: 'Risinājums: Negatīva skaitļa kļūda'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Negative is Exception {
    has $.n;

    method message {
        "$.n is negative";
    }
}

sub check($n) {
    Negative.new(n => $n).throw if $n < 0;
    return $n;
}

{
    say check(-5);

    CATCH {
        when Negative {
            say .message;
        }
    }
}

Negative.new(n => -10).throw;
```

🦋 Atrodiet programmu failā [negative-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/negative-error.raku).

## Izvade

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Komentāri

1. `Negative is Exception` padara klasi izmetamu, un tās metode `message` izmanto atribūtu `n`, lai uzbūvētu tekstu.

1. `check` pārbauda savu ievadi un negatīvam skaitlim izmet paša definēto izņēmumu. Izņēmums izceļo no `check` līdz `CATCH` izsaucošajā blokā, kur `when Negative` tam atbilst pēc tipa un izdrukā paziņojumu. Ievades pārbaude un sliktu vērtību signalizēšana ar tipizētu izņēmumu ir ļoti izplatīts, īsts paša definētu izņēmumu lietojums.

1. `{ … }` ap izsaukumu ir tur tāpēc, ka fāzeris `CATCH` apstrādā izņēmumus, kas izmesti **tā paša apņemošajā blokā**. Bloks sagrupē riskanto `check(-5)` kopā ar `CATCH`, kas to sargā, tāpēc izmestais izņēmums tiek noķerts turpat, un izpilde atsākas tūlīt aiz bloka. Neietinot tos blokā, `CATCH` sargātu visu programmu — un, tiklīdz tas izņēmumu noķertu, programma vienkārši beigtos, bez dabiskas vietas, kur turpināt.

1. Nobeiguma `Negative.new(n => -10).throw` parāda otru šīs medaļas pusi. Tas atrodas **ārpus** bloka, tāpēc to nenoķer nekas: izņēmums izplatās līdz pašai augšai, un programma mirst, izdrukājot paziņojumu un izsaukumu atskaiti standarta kļūdu plūsmā un izejot ar nenulles statusu. Tāds ir noklusētais liktenis jebkuram izņēmumam, ko nenoķerat, — un tieši tāpēc pirmajam izmetienam bija vajadzīgs `CATCH`, lai izdzīvotu.

{% include nav.html %}
