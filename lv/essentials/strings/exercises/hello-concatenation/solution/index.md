---
title: 'Risinājums: Sveika, Savienošana!'
---

{% include menu.html %}

## Kods

Šeit ir iespējams risinājums šai problēmai:

```raku
my $name = prompt 'What is your name? ';
say 'Hello, ' ~ $name ~ '!';
```

🦋 Jūs varat atrast pirmkodu failā [hello-concatenation.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/hello-concatenation.raku).

## Izvade

Palaidiet programmu, un tā nonāks režīmā, kad tā gaidīs jūsu ievadi. Pēc tam, kad ievadīsiet vārdu un nospiedīsiet Enter, programma turpinās un izdrukās sveicienu:

```console
$ raku exercises/strings/hello-concatenation.raku
What is your name? John
Hello, John!
```

## Komentāri

Salīdziniet programmu ar [iepriekšējo variantu](../../../../scalar-variables/exercises/greet-a-person/solution), kur mēs nodevām trīs virknes `say` rutīnai:

```raku
say 'Hello, ', $name, '!';
```

Šoreiz trīs daļas vispirms tiek savienotas un pēc tam nodotas `say` kā viena virkne.

{% include nav.html %}