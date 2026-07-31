---
title: Ārpusē definēti supply
translations_gpt:
---

{% include menu.html %}

Katrs līdzšinējais `whenever` savu supply izveidoja turpat galvenē — `whenever Supply.from-list(...)`. Ātram piemēram tas lasās labi, taču īstām programmām notikumu avots reti kad ir pa rokai tieši šajā vietā. Biežāk supply tiek uzbūvēta kaut kur citur — to atgriež funkcija, rada `Supplier` vai pasniedz ligzda vai taimeris — un atnāk kā parasts mainīgais. `whenever` tikpat labprāt vēro nosauktu supply:

```raku
my $sensors  = Supply.from-list(18, 21, 19);
my $messages = Supply.from-list('hi', 'bye');

react {
    whenever $sensors {
        say "temperature: $_";
    }
    whenever $messages {
        say "message: $_";
    }
}
```

Tas izdrukā:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

Tātad `whenever $sensors { … }` lasiet kā «ikreiz, kad supply `$sensors` — lai no kurienes tā būtu nākusi — izstaro vērtību, izpildi šo ķermeni». Iepriekš redzētais iekļautais `whenever Supply.from-list(...)` ir tikai īpašs gadījums, kad avots gadās tapt uz vietas.

Ja šī ārējā bloka ar iekšējiem blokiem forma jums kaut ko atgādina, jums ir taisnība — [nākamā lappuse](/lv/paradigms/react-whenever/whenever-vs-when) to salīdzina ar `given`/`when`.

{% include nav.html %}
