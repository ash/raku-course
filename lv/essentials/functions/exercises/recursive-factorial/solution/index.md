---
title: 'Risinājums: Rekursīvais faktoriāls'
---

{% include menu.html %}

Faktoriāls ir ļoti produktīvs uzdevums, jo to var atrisināt dažādos veidos. Šoreiz mēs izmantojam rekurziju, kas nozīmē, ka funkcija tiek izsaukta no pašas sevis.

## Kods 1

Šeit ir risinājuma kods. Ņemiet vērā, ka jums ir jāpārbauda nosacījums, lai apturētu rekurziju, pretējā gadījumā tā turpināsies bezgalīgi.

```raku
sub factorial($n) {
    if $n < 2 {
        return 1;
    }
    else {
        return $n * factorial($n - 1);
    }
}

say factorial(10);
```

🦋 Atrodiet programmu failā [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial.raku).

## Kods 2

Gadījumos, kā parādīts šajā kodā, bieži vien ir labāk izmantot `if` postfix formas, lai uzreiz atgrieztos no funkcijas. Šī pieeja padara kodu skaidrāku un noņem daudz iekavu un pieturzīmju.

```raku
sub factorial($n) {
    return 1 if $n < 2;
    return $n * factorial($n - 1);
}

say factorial(10);
```

🦋 Atrodiet atjaunināto programmu failā [recursive-factorial-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial-2.raku).

## Piemērs

Palaidiet programmu un pārbaudiet rezultātu. Starp citu, vai jūs zinājāt, ka _10!_ ir precīzs sekunžu skaits sešās nedēļās?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}