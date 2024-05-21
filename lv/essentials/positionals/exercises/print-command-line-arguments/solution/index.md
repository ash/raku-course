---
title: Risinājums ‘Izdrukāt komandrindas argumentus’
---

{% include menu.html %}

Programma saņem argumentus no komandrindas masīvā `@*ARGS`. Tāpēc mums ir jāiterē pār tā elementiem.

## Kods

```raku
.say for @*ARGS;
```

🦋 Atrodiet programmu failā [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/print-command-line-arguments.raku).

## Izvade

Palaidiet programmu un pārliecinieties, ka tā izdrukā argumentus pa vienai rindai:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}