---
title: 'Viktorīna — `try`'
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
my $r = try {
    die 'Boom!';
    say 'inside';
};

say 'outside';
```

{:.quiz}
1 | outside
0 | inside
0 | inside un tad outside
0 | Boom!
0 | kļūda

{% include quiz.html %}

<div class="extended-explanation">

Šeit notiek divas lietas. Pirmkārt, `die` uzreiz pārtrauc atlikušo `try` bloka daļu, tāpēc rinda `say 'inside'` netiek sasniegta nekad — no bloka iekšienes netiek izdrukāts nekas. Otrkārt, tā kā `try` izņēmumu noķer, pati programma neapstājas: izpilde turpinās aiz bloka, un `say 'outside'` izpildās parastā kārtā. Tātad vienīgā izdrukātā rinda ir `outside`. (`$r` būtu nedefinēts, un paziņojums `Boom!` gaidītu `$!`, ja tur ieskatītos.)

</div>

{% include nav.html %}
