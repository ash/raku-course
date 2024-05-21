---
title: Vairākas MAIN funkcijas
---

{% include menu.html %}

Tāpat kā jebkura cita funkcija Raku, `MAIN` funkcijai var būt tās `multi` varianti. Tas ļauj programmai individuāli reaģēt uz dažādu skaitu vai dažādiem ievades parametru veidiem.

```raku
multi sub MAIN($a) {
    say 2 * $a;
}

multi sub MAIN($a, $b) {
    say $a + $b;
}
```

Šī programma dubulto savu vienīgo argumentu vai pieskaita to otrajam argumentam, ja tas ir klāt:

```console
$ raku t.raku 21
42

$ raku t.raku 21 33
54
```

{% include nav.html %}