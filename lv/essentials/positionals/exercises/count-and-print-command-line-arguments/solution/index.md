---
title: Risinājums ‘Skaitīt un izdrukāt komandrindas argumentus’
---

{% include menu.html %}

Šajā programmā `for` cikls ir laba izvēle.

## Kods

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Atrodi programmu failā [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/count-and-print-arguments.raku).

## Izvade

Palaid programmu un pārliecinies, ka tā izdrukā argumentus un rindu numurus:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Diskusija

Šī programma izmanto dažus noderīgus trikus. Pirmkārt, `for` cikls iet pa [diapazonu, kas konstruēts ar `^`](/lv/essentials/ranges/excluding-endpoints). Tātad diapazons sākas no 0 un turpinās līdz (bet neieskaitot) `@*ARGS` vērtību. Šajā kontekstā [tas atgriež](/lv/essentials/positionals/arrays#size) masīva garumu.

Tā kā masīva pirmajam elementam ir indekss `0`, un uzdevums prasa, lai mēs skaitītu rindas no `1`, šis vienkāršais nobīde tiek aprēķināta [koda blokā](/lv/essentials/strings/code-interpolation) virknes iekšpusē: `"{$n + 1} ..."`.

{% include nav.html %}