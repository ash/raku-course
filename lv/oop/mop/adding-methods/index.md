---
title: Metožu pievienošana izpildes laikā
translations_gpt:
---

{% include menu.html %}

MOP ir domāts ne tikai izpētei — tas var arī **mainīt** tipu, kamēr programma darbojas. Metametode `.^add_method` pievieno klasei jaunu metodi:

```raku
class Empty {
}

Empty.^add_method('greet', method { 'hi' });

say Empty.new.greet; # hi
```

Klase `Empty` ir definēta pavisam bez metodēm. `Empty.^add_method('greet', …)` tad piesaista metodi ar nosaukumu `greet`, kas dota kā anonīma `method { … }`. No šī brīža katrs `Empty` objekts atsaucas uz `.greet`, gluži tāpat, it kā tā būtu uzrakstīta klasē.

Šī ir īsta metaprogrammēšana: `Empty` metaobjektam tiek likts izaudzēt jaunu metodi. Tas pats protokols ir pamatā iespējām, ko jau esat izmantojuši — konceptuāli, kad rakstāt `class`, `role`, `has` vai `method`, kompilators jūsu tipu uzbūvē jūsu vietā ar MOP metodēm, piemēram, `.^add_method` un `.^add_attribute`.

«Konceptuāli» tāpēc, ka šis ir valodas modelis, nevis solījums par kādu konkrētu kompilatoru. MOP ir tas, kā objektu sistēma tiek *specificēta*; vai konkrēta implementācija katru deklarāciju burtiski vada caur šīm metametodēm — un vai to var novērot —, ir šīs implementācijas ziņā. Tā paša iemesla dēļ šo metametožu *izsaukšana* pašam ir atkarīga no implementācijas: kuras no tām kompilators atklāj un kā tieši tās uzvedas, var atšķirties, tāpēc kods, kas ķeras pie `.^add_method` un tamlīdzīgām, var nedarboties vienādi katrā Raku.

Metožu pievienošana izpildes laikā ir jaudīgs un reti vajadzīgs rīks. Vairums programmu pie tā nekad neķeras, taču tieši tas padara Raku objektu sistēmu atvērtu: klašu likumi paši ir uzrakstīti MOP terminos, tāpēc tos var paplašināt. Ikdienas kodam tā MOP daļa, ko patiešām izmantosiet, ir iepriekšējā temata izpētes metametodes.

{% include nav.html %}
