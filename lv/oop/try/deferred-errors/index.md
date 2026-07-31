---
title: Ne katra kļūda parādās uzreiz
translations_gpt:
---

{% include menu.html %}

Pēc noklusējuma izmests izņēmums aptur programmu uzreiz, un `try` ir veids, kā to noķert. Taču ne viss, kas izskatās pēc liktenīgas kļūdas, patiešām aptur programmu tajā brīdī, kad tas notiek. Raku ir neveiksmes, kas paliek klusas, atliekot savu reakciju līdz brīdim, kad rezultātu izmantojat, vai ļaujot to izpētīt un turpināt. Pāris no tām šajā daļā jau ir parādījušās, un ir vērts tās savākt vienuviet.

**Dalīšana ar nulli.** Dalīšana ar nulli neuzsprāgst tur, kur uzrakstīta. Sliktā vērtība tiek radīta un klusi paturēta; tā izmet izņēmumu tikai tad, kad to *izmantojat* — piemēram, izdrukājot vai pārveidojot:

```raku
my $x = 1 / 0;    # no error here
say 'still running';
say $x;           # only now does it throw
```

Šī atliktā uzvedība un `Failure` objekti aiz tās ir temata [Mīkstās neveiksmes](/lv/oop/failures) priekšmets.

**Neveiksmīga ārēja programma.** `Proc`, ko atgriež `run` vai `shell` un kas beidzies nesekmīgi, neizmet izņēmumu, kad tiek radīts. Tas izmet tikai tad, ja to *izmetat* neapstrādātu; saglabājiet to un nolasiet `.exitcode` (vai pārbaudiet kā Būla vērtību), un neveiksme paliek parasta vērtība, uz ko var reaģēt. To redzējāt sadaļā [Proc objekts](/lv/oop/external-programs/the-proc-object).

Kopīgais pavediens: neveiksmi var *atlikt* — pārvērst par vērtību, ko izpētāt, kad esat gatavi, nevis par tūlītēju avāriju. `try` un fāzeris `CATCH` tiek galā ar kļūdām, kas tiek izmestas uzreiz; šie mehānismi tiek galā ar tām, kas netiek.

{% include nav.html %}
