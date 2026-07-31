---
title: Test modulis
translations_gpt:
---

{% include menu.html %}

Testēšanas rīkus ievelciet ar `use Test`. Pamata pārbaude ir `ok`, kas izdodas, kad tās nosacījums ir patiess. Katra pārbaude ņem neobligātu aprakstu:

```raku
use Test;

ok 1 == 1, 'one equals one';
ok 2 > 1,  'two is greater';

done-testing;
```

Palaižot to, tiek izdrukāts standarta testu formātā, kas pazīstams kā _TAP_:

```
ok 1 - one equals one
ok 2 - two is greater
1..2
```

Katra izdevusies pārbaude tiek ziņota kā `ok` ar savu numuru un aprakstu; neizdevusies būtu `not ok`. Nobeiguma `1..2` ir _plāns_, kas pasaka, cik testu izpildījās. Izsaukums `done-testing` beigās šo plānu izdod automātiski.

Kad gaidāt konkrētu vērtību, `is` ir skaidrāks nekā `ok`, jo neveiksmes gadījumā tas ziņo gan gaidīto, gan faktisko vērtību:

```raku
use Test;

is 2 + 2, 4, 'addition works';

done-testing;
```

Tas izdrukā `ok 1 - addition works`. Lai redzētu šo ziņošanu darbībā, dodiet `is` nepareizu gaidīto vērtību:

```raku
use Test;

is 2 + 2, 5, 'addition works';

done-testing;
```

Tagad pārbaude neizdodas, un izvade paskaidro tieši, kā:

```
not ok 1 - addition works
# Failed test 'addition works'
# at test.raku line 3
# expected: '5'
#      got: '4'
1..1
# You failed 1 test of 1
```

Rinda `not ok` iezīmē neveiksmi, un diagnostikas rindas zem tās parāda, kas tika gaidīts, pretstatā tam, kas patiešām iznāca, — un tieši tāpēc `is` ir noderīgāks nekā kails `ok`, kad svarīga ir konkrēta vērtība.

Ar `ok`, `is` un `done-testing` jau pietiek, lai uzrakstītu noderīgu testu failu; nākamais temats pievieno [pārējos salīdzinājumus](/lv/advanced/testing/comparisons).

{% include nav.html %}
