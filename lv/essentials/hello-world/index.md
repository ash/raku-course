---
title: Hello, World! in Raku
---

{% include menu.html %}

Lieliski, mēs esam iemācījušies būtiskās lietas, kas nepieciešamas, lai sarunātos ar Raku un redzētu atbildi, tāpēc pāriesim tieši pie pirmās īstās programmas, 'Hello, World!'.

```raku
say 'Hello, World!';
```

Tieši pirms mēs apgūstam funkciju pamatus, apskatīsim dažas dažādas iespējas, kuras varat izmantot šajā programmā.

Pirmkārt, jūs varat ievietot iekavas ap funkcijas argumentu:

```raku
say('Hello, World!');
```

Otrkārt, jūs varat izmantot citas funkcijas, proti, `put` un `print`. Atkal, ar vai bez iekavām:

```raku
put 'Hello, World!';

print("Hello, World!\n");
```

Pamaniet, ka jums manuāli jāpievieno jaunas rindas rakstzīme ziņojuma beigās `print` gadījumā. Bet neuztraucieties, mēs visas šīs detaļas apskatīsim vēlāk.

Pirms turpinām, ļaujiet man parādīt vēl vienu aizraujošu iespēju. Jūs varat izsaukt funkciju kā metodi tieši uz virknes:

```raku
'Hello, World!'.say;
```

{% include nav.html %}