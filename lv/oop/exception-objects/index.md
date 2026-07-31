---
title: Izņēmumu objekti
translations_gpt:
---

{% include menu.html %}

Izņēmums ir objekts, gluži kā jebkurš cits Raku valodā. Kad rakstāt `die 'something failed'`, Raku jūsu paziņojumu ietin izņēmuma objektā ar tipu `X::AdHoc`.

`CATCH` iekšienē šo objektu var izpētīt. Tā tips nāk no `.^name`, bet teksts no `.message`:

```raku
{
    die 'something failed';

    CATCH {
        default {
            say .^name;   # X::AdHoc
            say .message; # something failed
        }
    }
}
```

Zinot tipu, dažādas kļūdas var apstrādāt dažādi. Raku iebūvētajiem izņēmumiem ir savi tipi, kuru nosaukumi sākas ar `X::`, un tiem var piemeklēt atbilstību ar `when`, gluži tāpat, kā piemeklējāt vērtības `given`/`when` blokā:

```raku
{
    die 'something failed';

    CATCH {
        when X::AdHoc {
            say 'an ad-hoc error: ' ~ .message;
        }
        default {
            say 'some other error';
        }
    }
}
```

Tas izdrukā `an ad-hoc error: something failed`, jo izņēmums atbilda tipam `X::AdHoc`. Atbilstības piemeklēšana pēc tipa ir pamats konkrētu kļūdu apstrādei — ideja, uz kuras būvējas sadaļa par [pašu definētiem izņēmumiem](/lv/oop/custom-exceptions).

{% include nav.html %}
