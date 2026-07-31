---
title: Publicēšana ar fez
translations_gpt:
---

{% include menu.html %}

Iepriekšējais temats iepazīstināja ar `fez` kā veidu, kā augšupielādēt distribūciju Raku ekosistēmā. `fez` lietot nav obligāti — tas nav vienīgais veids, kā publicēt —, taču tā ir visizplatītākā izvēle, un tas dara vairāk nekā tikai augšupielādē: tas var arī sagatavot jaunu distribūciju un pārvaldīt jūsu autora kontu. Instalējiet to ar `zef`:

```
zef install fez
```

## Distribūcijas uzsākšana

Tā vietā, lai `META6.json` un direktorijas `lib/` un `t/` liktu kopā ar roku, varat ļaut `fez` tos uzģenerēt:

```
fez init My::Greeting
```

`fez init` inicializē jaunu distribūciju, uz kuras būvēt — projekta direktoriju ar gatavu `META6.json` un jau ieliktu standarta izkārtojumu —, tā ka varat uzreiz ķerties pie koda rakstīšanas zem `lib/` un testiem zem `t/`, nevis pats gatavot metadatu failu.

## Reģistrēšanās un pieteikšanās

Publicēšanai nepieciešams ekosistēmas konts. To izveidojat vienreiz ar `fez register` (tas prasa lietotājvārdu, e-pastu un paroli) un piesakāties ar `fez login`, kas saglabā jūsu atslēgu, lai vēlākās komandas būtu autentificētas:

```
fez register
fez login
```

Jūsu lietotājvārdam ir nozīme: distribūcijas `META6.json` jānes lauks `auth` ar vērtību `zef:<lietotājvārds>`, un tieši tā ekosistēma zina, ka augšupielāde tiešām ir jūsu.

## Augšupielāde

Kad konts ir izveidots un distribūcija gatava, `fez upload` iepako pašreizējo direktoriju un iesniedz to:

```
fez upload
```

Pēc tam ikviens to var instalēt pēc nosaukuma ar `zef install My::Greeting`. Katru versiju drīkst augšupielādēt tikai vienreiz, tāpēc pirms atjauninājuma publicēšanas neaizmirstiet paaugstināt `version` failā `META6.json`.

## Citas noderīgas komandas

Vēl dažas `fez` komandas, pie kurām ķersieties:

* `fez review` — pirms augšupielādes pārbaudīt distribūciju uz iespējamām problēmām;
* `fez list` — parādīt jau publicētās distribūcijas;
* `fez refresh` — pārbūvēt `META6.json` no failiem, kas pašlaik ir uz diska.

> Visām šīm vajadzīgs instalēts `fez` un tīkla piekļuve, bet visam, kas seko pēc `init`, — ekosistēmas konts.

{% include nav.html %}
