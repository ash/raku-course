---
title: 'Izņēmumu pārtveršana ar `try`'
translations_gpt:
---

{% include menu.html %}

Kad Raku programmā kaut kas noiet greizi — trūkstošs fails, skaidri norādīts `die` —, tiek izmests _izņēmums_. Pēc noklusējuma neapstrādāts izņēmums aptur programmu. Bloks `try` ļauj izpildīt kodu, kas varētu neizdoties, bez programmas avārijas.

Riskanto kodu ietinat blokā `try`. Ja tā iekšienē tiek izmests izņēmums, bloks tur apstājas, taču programma turpinās:

```raku
my $result = try {
    die 'Boom!';
};

say "Still works";
```

`die` noķer `try`, tāpēc programma neavarē — tā turpina uzreiz ar nākamo teikumu un izdrukā:

```
Still works
```

Kad bloks šādi neizdodas, tas izrēķinās par nedefinētu vērtību, tāpēc `$result` ir nedefinēts:

```raku
say $result.defined; # False
```

Noķertais izņēmums glabājas speciālajā mainīgajā `$!`. Tā paziņojumu var nolasīt no turienes:

```raku
say $!.message; # Boom!
```

Tātad `try` pārvērš liktenīgu kļūdu par kaut ko tādu, ko jūsu programma var izpētīt un uz ko reaģēt. Ja bloks izpildās bez neviena izņēmuma, `$result` satur tā vērtību, un `$!` ir nedefinēts.

{% include nav.html %}
