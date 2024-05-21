---
title: 'Risinājums: Izdrukāt summu'
---

{% include menu.html %}

Šī programma sastāv no vienas `MAIN` funkcijas, kas pieņem divus tipizētus argumentus, kuri abi tiek veidoti no komandrindas argumentiem.

## Kods

Šeit ir risinājums:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Atrodi programmu failā [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/print-the-sum.raku).

## Izvade

Izmēģiniet dažādus ievades skaitļus:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

Jūs varat arī mēģināt palaist programmu bez argumentiem vai ar dažādu tipu argumentiem un redzēt, kas notiek. Par šo gadījumu apstrādi runāsim kursa otrajā daļā.

{% include nav.html %}