---
title: Apakšprogrammu atgriešana
translations_gpt:
---

{% include menu.html %}

Apakšprogramma var arī **atgriezt** apakšprogrammu. Tas ļauj uz vietas būvēt jaunas funkcijas, pielāgotas tiem argumentiem, ko dodat:

```raku
sub adder($n) {
    sub ($x) { $x + $n };
}

my &add5 = adder(5);
say add5(3); # 8
```

`adder(5)` uzbūvē un atgriež anonīmu apakšprogrammu, kas savam argumentam pieskaita `5`. Mēs to saglabājam `&add5` un izsaucam kā jebkuru citu apakšprogrammu. Izsaucot `adder(10)`, iegūtu citu saskaitītāju, kas pieskaita desmit.

Ievērojiet, ka atgrieztā apakšprogramma atceras `$n` vērtību no tā izsaukuma, kas to radīja, — `add5` patur savu `5` pat pēc tam, kad `adder` beidzis darbu. Apakšprogrammu, kas satver vērtības no redzamības apgabala, kurā tā radīta, sauc par [_slēgumu_](/lv/paradigms/closures) — tas ir nākamās sadaļas priekšmets.

Funkciju atgriešana ir kompakts veids, kā radīt radniecīgu darbību saimes, neatkārtojoties: viena `adder` definīcija dod neierobežotu skaitu konkrētu saskaitītāju.

{% include nav.html %}
