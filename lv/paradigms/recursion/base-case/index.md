---
title: Bāzes gadījums
translations_gpt:
---

{% include menu.html %}

Katrai rekursīvai apakšprogrammai vajadzīgs _bāzes gadījums_: nosacījums, pie kura tā atgriež atbildi, **neizsaucot** sevi vēlreiz. Bez tā apakšprogramma izsauktu sevi mūžīgi.

Faktoriālā bāzes gadījums bija «`$n` ir `1` vai mazāk». Lūk, vēl viens piemērs — skaitīšana atpakaļ līdz nullei:

```raku
sub countdown($n) {
    return if $n < 1;   # base case: stop
    say $n;
    countdown($n - 1);  # recursive step
}

countdown(3);
```

Programma izdrukā:

```
3
2
1
```

Pirmā rinda ir bāzes gadījums: kad `$n` noslīd zem `1`, apakšprogramma uzreiz atgriežas un izsaukumu ķēde beidzas. Rekursīvais solis vienmēr virzās **uz** bāzes gadījumu, izsaucot `countdown` ar mazāku skaitli.

Ja bāzes gadījumu aizmirstat vai soļi to nekad nesasniedz, rekursija neapstājas nekad un programma galu galā avarē. Pareizai rekursīvai apakšprogrammai vienmēr ir divas lietas: bāzes gadījums, kas rekursiju beidz, un solis, kas katru izsaukumu tam pietuvina.

{% include nav.html %}
