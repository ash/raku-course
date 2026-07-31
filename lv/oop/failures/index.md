---
title: Mīkstās kļūmes
translations_gpt:
---

{% include menu.html %}

Izņēmuma izmešana ar `die` uzreiz aptur visu. Reizēm tas ir pārāk krasi: gribat, lai apakšprogramma paziņo, ka rezultātu radīt nav izdevies, taču lai izsaucējs izlemj, vai tas ir liktenīgi. Tam Raku ir _mīkstās neveiksmes_, ko rada ar `fail`.

Kad apakšprogramma izsauc `fail`, tā neizmet izņēmumu uzreiz. Tā vietā tā atgriež izsaucējam īpašu `Failure` objektu. `Failure` ir nedefinēts, tāpēc izsaucējs var to klusi pārbaudīt:

```raku
sub divide($a, $b) {
    fail 'cannot divide by zero' if $b == 0;
    return $a / $b;
}

say divide(10, 2);         # 5
say divide(10, 0).defined; # False
```

Veiksmīgais izsaukums atgriež `5`. Neveiksmīgais atgriež `Failure`, kas `defined` ziņo `False`, tāpēc izsaucējs var rezultātu pārbaudīt, pirms to izmanto.

`Failure` sauc par _mīkstu_ tāpēc, ka tas pārvēršas par īstu, izmestu izņēmumu tikai tad, ja mēģināt to izmantot kā vērtību, iepriekš nepārbaudot. Kamēr to apstrādājat — piemēram, pārbaudot `defined` —, tas paliek kluss. Tas ļauj apakšprogrammai signalizēt par problēmu, nepiespiežot visu programmu apstāties.

## To jau esat redzējuši

Šis atliktais neveiksmes stils nav tikai `fail` īpatnība. Šajā daļā ar to pašu ideju jau sastapāties divreiz.

**Dalīšana ar nulli** klusi rada vērtību un izmet izņēmumu tikai tad, kad to patiešām izmantojat:

```raku
my $x = 1 / 0;   # no error yet
say $x;           # throws only here, when the value is used
```

**Neveiksmīga ārēja programma** atgriež `Proc`, kas izmet izņēmumu tikai tad, ja to izmetat neapstrādātu; saglabājiet to un izpētiet, un tas paliek klusa vērtība:

```raku
run 'sh', '-c', 'exit 1';   # the failing Proc is discarded, so this throws
```

Katrā gadījumā problēma neaptur programmu tajā brīdī, kad notiek: tā kļūst par vērtību, ko varat pārbaudīt, un pāraug izmestā izņēmumā tikai tad, kad to izmantojat nepārbaudītu vai ignorējat. Temats [Ne katra kļūda ir tūlītēja](/lv/oop/try/deferred-errors) parāda abus līdzās.

{% include nav.html %}
