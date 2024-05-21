---
title: Rezultāta atgriešana
---

{% include menu.html %}

Funkcijas bieži vien ne tikai veic kādu darbību, bet arī atgriež rezultātu. Piemēram, funkcionālajā programmēšanā funkcijām nevajadzētu radīt nekādas blakusparādības, piemēram, drukāt uz konsoles. Tomēr Raku neierobežo jūs to darīt. Apskatīsim, kā atgriezt vērtību no funkcijas un kā to iegūt izsaukuma kodā.

```raku
sub add($x, $y) {
    return $x + $y;
}

my $sum = add(10, 20);
say $sum; # 30
```

Šeit funkcija ar nosaukumu `add` pieņem divus skaitļus un atgriež to summu. Tiek izmantots skaidrs `return`. Izsaukuma pusē funkcijas atgriezto vērtību var izmantot kā jebkuru citu vērtību. Iepriekš minētajā programmā tā tiek piešķirta mainīgajam.

## Pēdējā novērtētā vērtība

Raku valodā skaidrs `return` nav nepieciešams, ja rezultāts, kuru vēlaties atgriezt no funkcijas, ir pēdējā aprēķinātā vērtība tās ķermenī. Mūsu `add` funkciju var vienkāršot:

```raku
sub add($x, $y) {
    $x + $y
}
```

Kā jūs varbūt pamanījāt, rindas beigās nav semikola, jo tas nav nepieciešams, ja rinda beidzas ar pašreizējo koda bloku.

Šādas triviālas un mazas funkcijas bieži tiek formatētas vienā rindā, lai kods būtu kompaktāks:

```raku
sub add($x, $y) { $x + $y }
```

## Nav atgriežamo datu

Ja jums ir nepieciešams atgriezties no funkcijas pirms tās ķermeņa beigām un funkcija neatgriež nekādu rezultātu, izmantojiet tukšu `return`.

```raku
sub test($x) {
    return if $x <= 10;
    say "$x ir virs limita";
}
```

{% include nav.html %}