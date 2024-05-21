---
title: Risinājums ‘π vērtība’
---

{% include menu.html %}

Programma, lai izdrukātu π vērtību, ir pietiekami vienkārša.

## Kods

```raku
say π;
```

🦋 Pilnu kodu var atrast failā [pi.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/pi.raku).

## Izvade

Palaidiet programmu un skatieties, ko tā izdrukā:

```console
$ raku exercises/numbers/pi.raku
3.141592653589793
```

## Komentāri

Raku piedāvā mums iebūvētu konstanti, ko sauc par `π`, kas padara programmu triviālu. Tomēr apsveriet citas iespējas, kā izdarīt to pašu:

```raku
    π.say;
```

Vai:

```raku
    pi.say;
```

Vai:

```raku
    say pi;
```

{% include nav.html %}