---
title: Pabeigšanas gaidīšana
translations_gpt:
---

{% include menu.html %}

`await` ir tiešais gaidīšanas veids, taču reaktīvs kods arī gaida — tikai netieši. `react` bloks nebeidzas, kamēr nav pabeigtas visas plūsmas, ko tas vēro, un tas dod to pašu «viss ir pabeigts» garantiju:

```raku
my @values;

react {
    whenever Supply.from-list(2, 4, 6) {
        @values.push($_);
    }
}

say [+] @values; # 12
```

`say` izpildās tikai **pēc** tam, kad `react` bloks ir beidzies, tāpēc `@values` jau satur katru izstaroto vērtību. Faktiski `react` bloks plūsmu sagaidīja jūsu vietā.

Šis ir noderīgs paņēmiens: izmantojiet `react` bloku, lai savāktu visu, ko plūsma izstaro, un pēc tam nākamajā rindā strādājiet ar savākto rezultātu, būdami droši, ka plūsma ir pabeigta. Vai jūs gaidāt solījumu ar `await` vai plūsmu ar `react`, princips ir tas pats — apstāties, līdz konkurentais darbs ir padarīts, un tad turpināt ar tā rezultātiem.

{% include nav.html %}
