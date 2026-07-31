---
title: 'Risinājums: Slurpy nosauktie argumenti'
translations_gpt:
---

{% include menu.html %}

Seit ir iespejams uzdevuma risinajums.

## Kods

```raku
sub describe($name, *%opts) {
    my $details = %opts.sort.map({ "{.key}={.value}" }).join(', ');
    "$name: $details";
}

say describe('Anna', colour => 'red', size => 5);
```

🦋 Pirmkodu var atrast faila [slurpy-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/slurpy-hash.raku).

## Izvade

```
Anna: colour=red, size=5
```

## Komentari

1. Fiksais pozicionalais parametrs `$name` tiek aizpildits pirmais, un uzsucosais `*%opts` savac katru atlikuso nosaukto argumentu hesa.

1. `%opts.sort` sakarto parus pec atslegas, tapec izvade ir determiniska — `colour` nak pirms `size`. `.map` parvers katru pari par `key=value` virkni ar `.key` un `.value`, un `.join(', ')` tos savieno kopa.

1. Galiga virkne interpole `$name` un salikto `$details`, iegustot `Anna: colour=red, size=5`.

{% include nav.html %}
