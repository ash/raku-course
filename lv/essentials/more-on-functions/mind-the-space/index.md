---
title: Pievērsiet uzmanību atstarpēm
---

{% include menu.html %}

Funkciju izmantošana Raku valodā pārsvarā ir intuitīva un nerada problēmas, taču jums jābūt uzmanīgiem ar šādu aspektu.

## Īsumā

Nepievienojiet atstarpi starp funkcijas nosaukumu un iekavām ar tās argumentiem. Bet izmantojiet atstarpi pēc `for` un `if`.

## Garā versija

Apskatīsim vienkāršu funkciju:

```raku
sub f($x, $y) {
    return $x + $y;
}
```

Pirmkārt, ņemiet vērā, ka nav atstarpes starp funkcijas nosaukumu un atverošajām iekavām, kas satur parametrus. Dažos citos programmēšanas valodās kodēšanas stili var prasīt atstarpi tur. Raku valodā tas ir pieņemami, bet tā nav prakse, kuru vajadzētu ievērot:

```raku
sub f ($x, $y) {
    return $x + $y;
}
```

Izsaukuma pusē atstarpes neesamība ir svarīga. Ja jūs izsaucat funkciju un izlaidat iekavas, tad atstarpe pēc funkcijas nosaukuma ir neizbēgama:

```raku
f 5, 6;
```

Bet, ja jūs pievienojat iekavas, jūs nevarat ievietot atstarpi pirms tām. Šis ir pareizs izsaukums:

```raku
f(5, 6);
```

Un šis izsaukums ir nepareizs:

```raku
f (5, 6);
```

Šāds kods izraisa izņēmumu:

    Too few positionals passed; expected 2 arguments but got 1
      sub f at t.raku line 1
      in block <unit> at t.raku line 5

Raku redz izsaukumu ar atstarpi `f (5, 6)` kā mēģinājumu nodot vienu argumentu `(5, 6)` funkcijai. Jūs varat viegli pārbaudīt šī argumenta tipu, ja pārrakstīsiet funkciju, lai tā pieņemtu tikai vienu argumentu:

```raku
sub f($param) {
    say $param.WHAT;
}

f (5, 6); # (List)
```

Tātad, izsaucot `f (5, 6)`, mēs nododam funkcijai [sarakstu](/lv/essentials/positionals/lists). Sarakstu kā vienu vienību.

## Kad atstarpe ir nepieciešama

Dažos gadījumos atstarpes rakstzīme ir nepieciešama. Tas notiek, kad jūs izmantojat iekavas ar vienu no atslēgvārdiem, piemēram, `if` vai `for` vai `loop`. Šāds kods ir nepareizs:

```raku
if(True != False) {
    say 'OK';
}
```

Kļūdas ziņojums izskaidro, kas ir nepareizi:

    ===SORRY!===
    The word 'if' is interpreted as a 'if()' function call.  Please use
    whitespace instead of parentheses.
    at /Users/ash/raku-course/t.raku:1
    ------> if⏏(True != False) {
    Unexpected block in infix position (two terms in a row)
    at /Users/ash/raku-course/t.raku:1
    ------> if(True != False)⏏ {

Gadījumā ar `if`, iekavas nav nepieciešamas vispār, tāpēc problēma nevar rasties, ja jūs tās neizmantojat. Bet dažos gadījumos, piemēram, ar `loop`, jums tās ir nepieciešamas, un atstarpe kļūst obligāta:

```for
loop(my $c = 0; $c != 10; $c++) { say $c }
```

Šajā kodā notiek tas pats: `loop(...)` tiek saprasts kā funkcijas izsaukums. Pievienojiet atstarpi, lai atrisinātu problēmu. Vai labāk pārrakstiet fragmentu, izmantojot `for`.

## Secinājums

Galvenais: lai izvairītos no šādām problēmām, nepievienojiet atstarpi starp funkcijas nosaukumu un iekavām ar funkcijas argumentiem un mēģiniet izvairīties no iekavām, ja tas ir iespējams ar citiem valodas konstrukcijām, piemēram, vadības plūsmu.

{% include nav.html %}