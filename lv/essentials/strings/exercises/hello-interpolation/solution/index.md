---
title: Risinājums ’Hello, Interpolation!‘
---

{% include menu.html %}

## Kods

Šeit ir iespējams risinājums šai problēmai:

```raku
my $name = prompt 'What is your name? ';
say "Hello, $name!";
```

🦋 Jūs varat atrast pirmkodu failā [hello-interpolation.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/hello-interpolation.raku).

## Izvade

Palaidiet programmu, un tā nonāks režīmā, kad tā gaidīs jūsu ievadi. Pēc tam, kad ievadīsiet vārdu un nospiedīsiet Enter, programma turpinās un izdrukās sveicienu:

```console
$ raku exercises/strings/hello-concatenation.raku
What is your name? Raku
Hello, Raku!
```

## Komentāri

Pamaniet, ka šoreiz virkne ir dubultos pēdiņās. Dubultajās pēdiņās mainīgie tiek interpolēti, tāpēc to saturs tiek ievietots virknē.

{% include nav.html %}