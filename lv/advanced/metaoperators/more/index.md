---
title: Krustojuma, hiper un noliedzošie
translations_gpt:
---

{% include menu.html %}

Papildus redukcijai un zip, Raku ir vēl vairāki metaoperatori. Trīs no tiem ir vērts zināt.

## Krusteniskais — `X`

Krusteniskais metaoperators `X` sapāro **katru** viena saraksta elementu ar **katru** otra saraksta elementu — Dekarta reizinājums:

```raku
say <a b> X <1 2>; # ((a 1) (a 2) (b 1) (b 2))
```

Tāpat kā zip, tas var ietvert operatoru, lai darbotos ar katru pāri. `X~` savieno katru pāri virknē, un `X*` sareizina:

```raku
say <a b> X~ <1 2>;         # (a1 a2 b1 b2)
say (1, 2, 3) X* (10, 100); # (10 100 20 200 30 300)
```

Kamēr zip apstaigā divus sarakstus sinhroni, krusteniskais operators tos apvieno visos iespējamos veidos.

## Hiper — `»…«`

Hiper metaoperators piemēro operatoru **katram** saraksta elementam. Operators tiek ietversts starp smailo `»…«` (vai ASCII `>>…<<`). Ar diviem sarakstiem tas strādā pa elementiem, līdzīgi kā zip; ar vienu vērtību vienā pusē tā tiek izstiepta pār visu sarakstu:

```raku
say (1, 2, 3) »+» (10, 20, 30); # (11 22 33)
say (1, 2, 3) »*» 2;            # (2 4 6)
```

Abām bultiņām nav jārāda vienā virzienā, un to virziens nosaka, kas notiek, ja saraksti atšķiras garumā — bultiņa, kas rāda **uz** sarakstu, ļauj šo sarakstu atkārtot, lai saskaņotu ar otru. ASCII pierakstā `<<`/`>>` četras kombinācijas ir:

* `>>op<<` — neviena puse netiek izstiepta; sarakstiem jau jābūt vienāda garuma, pretējā gadījumā rodas kļūda;
* `>>op>>` — **labais** saraksts tiek atkārtots, lai sasniegtu kreiso;
* `<<op<<` — **kreisais** saraksts tiek atkārtots, lai sasniegtu labo;
* `<<op>>` — **īsākais** saraksts tiek atkārtots, lai sasniegtu garāko.

```raku
say (1, 2, 3, 4) <<+>> (10, 20); # (11 22 13 24)  — 10, 20 repeats to 10, 20, 10, 20
```

Ir arī unārā forma, kas izsauc metodi katram elementam. `>>.uc` pārveido katru virkni lielajos burtos:

```raku
say <raku perl>>>.uc; # (RAKU PERL)
```

Hiper operācijas arī signalizē, ka darbu *var* veikt paralēli — ar saistīto `.hyper` metodi jūs iepazīsieties vēlāk [konkurentās programmēšanas sadaļā](/lv/paradigms/hyper-race).

## Negācijas — `!`

Pievienojot `!` salīdzināšanas operatora priekšā, tiek negēts tā rezultāts. Pazīstamais `!=` (nav vienāds) ir tieši šis metaoperators, piemērots `==`, un tas pats darbojas citiem Būla operatoriem, piemēram, `eq` un `%%`:

```raku
say 3 != 4;      # True
say 'a' !eq 'b'; # True  — not equal as strings
say 5 !%% 2;     # True  — 5 is not divisible by 2
```

Īsāk sakot, `$a !op $b` ir vienkārši glītāks veids, kā rakstīt `!($a op $b)`.

Tas ir apzināti. Atšķirībā no tādas minimālisma valodas kā esperanto, kas cenšas piedāvāt vienu regulāru veidu katras lietas izteikšanai, Raku labprāt piedāvā vairākus — tāpēc negācijas `!eq` pastāv līdzās specializētajam `ne` operatoram, un abi nozīmē tieši to pašu:

```raku
say 'a' ne 'b'; # True — the same test as 'a' !eq 'b'
```

{% include nav.html %}
