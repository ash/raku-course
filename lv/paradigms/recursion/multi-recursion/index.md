---
title: Rekursija ar multi apakšprogrammām
translations_gpt:
---

{% include menu.html %}

Līdz šim bāzes gadījums bija rinda apakšprogrammas _iekšienē_ — trejdaļīgs operators vai priekšlaicīgs `return`, kas pārbauda argumentu. Raku piedāvā izteiksmīgāku veidu, kā uzrakstīt to pašu. Tā kā apakšprogrammai var būt vairāki `multi` kandidāti, bāzes gadījumam un rekursīvajam solim varat dot **katram savu atsevišķu apakšprogrammu** un ļaut daudzkārtējam despečam katram izsaukumam izvēlēties pareizo.

Atcerieties faktoriālu. Ar `multi` tā divi gadījumi kļūst par divām apakšprogrammām:

```raku
multi fact(0)  { 1 }
multi fact($n) { $n * fact($n - 1) }

say fact(5); # 120
```

Pirmais kandidāts sakrīt tikai tad, kad arguments ir tieši `0` — šis literālis parakstā _ir_ bāzes gadījums. Katrs cits izsaukums aiziet uz otro kandidātu, kas reizina un rekursē. Kad `fact($n - 1)` beidzot sasniedz `0`, despečs pārslēdzas uz pirmo kandidātu un izsaukumu ķēde attinas. Bāzes gadījums vairs nav zars, aprakts ķermenī; tā ir apakšprogramma, kas eksistē vienai vienīgai vērtībai.

Kāpēc `0`, nevis `1`? Tāpēc, ka katrs solis atņem vienu, tāpēc jebkurš sākuma skaitlis galu galā nokrīt tieši uz `0`, un `0!` ir definēts kā `1` — tātad `0` ir tur, kur nokāpšana patiešām beidzas. Literāļa kandidāts sakrīt ar vienu *precīzu* vērtību, tāpēc bāze `multi fact(1)` pareizi aprēķinātu `fact(1)`, taču ļautu `fact(0)` izkrist cauri uz `multi fact($n)` un rekursēt garām nullei mūžīgi. Apstāšanās pie `0` patur apakšprogrammu pareizu katram nenegatīvam veselam skaitlim, ieskaitot `fact(0)`.

Tas lasās īpaši labi, kad bāzes gadījumu ir vairāk nekā viens. Fibonači vajag divus:

```raku
multi fib(0) { 0 }
multi fib(1) { 1 }
multi fib($n) { fib($n - 1) + fib($n - 2) }

say fib(10); # 55
```

Katrs bāzes gadījums ir savs vienas rindas kandidāts, un rekursīvais kandidāts tiek galā ar visu pārējo — bez ligzdotiem nosacījumiem.

Literālis, piemēram, `0`, sakrīt tikai ar šo precīzo vērtību. Kad bāzes gadījums aptver _diapazonu_ — «`$n` ir `1` vai mazāk» —, tā vietā izmantojiet ierobežojumu `where`:

```raku
multi fact($n where * <= 1) { 1 }
multi fact($n)              { $n * fact($n - 1) }

say fact(6); # 720
```

Ierobežotais kandidāts ir konkrētāks, tāpēc Raku to izmēģina pirmo; vienkāršais `$n` kandidāts uztver visu pārējo.

Tā pati disciplīna, kas iepriekš, joprojām paliek spēkā: katram rekursīvajam ceļam jāsasniedz bāzes gadījuma kandidāts. Faktoriāls ar literāli `0`, piemēram, ir drošs tikai nenegatīviem veseliem skaitļiem — `fact(-1)` pakāptos garām `0` un rekursētu mūžīgi, jo neviens kandidāts nekad nesakristu. Gadījumu sadalīšana pa `multi` apakšprogrammām nenoņem vajadzību pēc bāzes gadījuma; tā šim bāzes gadījumam tikai dod nosaukumu un savu māju.

{% include nav.html %}
