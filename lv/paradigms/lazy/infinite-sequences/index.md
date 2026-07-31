---
title: Bezgalīgas virknes
translations_gpt:
---

{% include menu.html %}

Aizstājiet gala vērtību ar `*`, un virkne kļūst **bezgalīga** — tai nav pēdējā elementa. Tā kā saraksts ir slinks, tas ir pilnīgi droši: nekas netiek aprēķināts, kamēr jūs to nepaņemat.

```raku
say (1, 2, 4 ... *).head(5); # (1 2 4 8 16)
```

Divnieka pakāpju rinda turpinās mūžīgi, bet `.head(5)` izvelk tikai pirmās piecas. Diapazons `1..*` ir vienkāršākā bezgalīgā virkne — visi veselie skaitļi no viena:

```raku
say (1..*).head(3);          # (1 2 3)
say (1..*).map(* ** 2).head(4); # (1 4 9 16)
```

Virkni var pat definēt ar tās pašas agrākajiem elementiem. Fibonači virkne, kurā katrs skaitlis ir iepriekšējo divu summa, ir slavena vienrindiņa:

```raku
my @fib = 1, 1, * + * ... *;
say @fib[^10]; # (1 1 2 3 5 8 13 21 34 55)
```

Slēgums `* + *` paņem divus iepriekšējos elementus un tos saskaita. Virknes glabāšana `@fib` šeit ir pieņemama, jo operators `...` to atzīmē kā slinku, tāpēc masīvs nemēģina to visu aprēķināt — tiek radīti tikai tie desmit elementi, ko prasa `@fib[^10]`.

Īkšķa likums: bezgalīga virkne ir droša, kamēr jūs no tās velkat vienīgi galīgu šķēli.

{% include nav.html %}
