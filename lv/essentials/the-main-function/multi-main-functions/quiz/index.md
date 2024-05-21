---
title: Viktorīna — Multi-MAIN
---

{% include menu.html %}

Šajā programmā ir trīs `MAIN` funkcijas versijas:

```raku
multi sub MAIN() { say 'Default mode' }
multi sub MAIN('help') { say 'Help mode' }
multi sub MAIN(Str $mode) { say "Mode '$mode'" }
```

Ko programma izdrukā, ja to palaiž ar vienu no šīm komandām:

## 1

```console
$ raku t.raku new
```

{:.quiz-select}
Izdrukā “Mode &apos;new&apos;” | (: Izdrukā “Default mode”, Izdrukā “Help mode”, Izdrukā “Mode &apos;new&apos;”, Beidzas ar izņēmumu :)

## 2

```console
$ raku t.raku 1001
```

{:.quiz-select}
Izdrukā “Mode &apos;1001&apos;” | (: Izdrukā “Default mode”, Izdrukā “Help mode”, Izdrukā “Mode &apos;1001&apos;”, Beidzas ar izņēmumu :)

## 3

```console
$ raku t.raku
```

{:.quiz-select}
Izdrukā “Default mode” | (: Izdrukā “Default mode”, Izdrukā “Help mode”, Izdrukā “Mode &apos;&apos;”, Beidzas ar izņēmumu :)

## 4

```console
$ raku t.raku Help
```

{:.quiz-select}
Izdrukā “Mode &apos;Help&apos;” | (: Izdrukā “Default mode”, Izdrukā “Help mode”, Izdrukā “Mode &apos;Help&apos;”, Beidzas ar izņēmumu :) | Parametri šajā gadījumā ir reģistrjutīgi.

{% include quiz.html %}

{% include nav.html %}