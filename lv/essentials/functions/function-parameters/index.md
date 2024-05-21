---
title: Funkcijas parametri
---

{% include menu.html %}

Ir pienācis laiks nodot datus funkcijai. Tā var pieņemt parametrus, kas uzskaitīti iekavās uzreiz pēc funkcijas nosaukuma.

```raku
sub greet($name) {
    say "Sveiki, $name!";
}
```

Tagad jūs varat izmantot funkciju un nodot tai dažādus argumentus:

```raku
greet('Alla');
greet('Karlis');
```

Divi vienas un tās pašas funkcijas izsaukumi tagad radīs dažādus rezultātus:

```console
$ raku t.raku
Sveiki, Alla!
Sveiki, Karlis!
```

%%tipblock

## Parametrs vai arguments

Šie termini bieži tiek lietoti savstarpēji aizvietojami. Tie abi attiecas uz 'to pašu lietu', bet raugās uz to no dažādām perspektīvām.

* Parametrs ir tas, ko funkcija sagaida.
* Arguments ir tas, ko jūs tai nododat.

Iepriekšējā piemērā `$name` ir funkcijas parametrs, savukārt `'Alla'` un `'Karlis'` ir tās argumenti.

%%/tipblock

## Vairāk parametru

Funkcija var pieņemt vairāk nekā vienu parametru. Šajā gadījumā uzskaitiet tos visus, atdalot ar komatiem:

```raku
sub add($x, $y) {
    say $x + $y;
}

add(10, 20); # 30
```

## Bez parametriem

Ir derīgs gadījums, kad funkcija nepieņem nekādus parametrus. Šajā gadījumā jūs varat vai nu pievienot tukšu iekavu pāri, vai arī pilnībā tās izlaist, kā mēs darījām [šīs sadaļas sākumā](../).

```raku
sub greet() {
    say 'Sveiki, Pasaule!';
}

greet();
```

## Paraksts

Funkcijas parametru sarakstu sauc par _parakstu_.

{% include nav.html %}