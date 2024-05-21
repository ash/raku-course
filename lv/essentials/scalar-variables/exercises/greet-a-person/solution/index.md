---
title: Risinājums uzdevumam 'Sveicināt personu'
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $name = prompt 'What is your name? ';
say 'Hello, ', $name, '!';
```

🦋 Avota kodu var atrast failā [greet-a-person.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/greet-a-person.raku).

## Izvade

Palaidiet programmu un ievadiet vārdu, kad saņemat uzvedni:

```console
$ raku exercises/scalar-variables/greet-a-person.raku 
What is your name? Inge
Hello, Inge!
```

## Komentāri

1. Šī programma izmanto skalāro mainīgo `$name`, lai saglabātu virkni, kuru lietotājs ievadīja atbildot uz uzvedni. Kad mainīgais tiek izmantots sarakstā, kuru nododat `say` funkcijai, jūs saņemat vārdu ziņojumā.

1. Ir labāks veids, kā atrisināt šo problēmu, izmantojot virknes interpolāciju. Atgriezīsimies pie šīs problēmas drīzumā.

{% include nav.html %}