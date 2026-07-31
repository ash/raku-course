---
title: Loģiskās operācijas ar citiem tipiem
---

{% include menu.html %}

Nākamajā sekcijā mēs runāsim par datu konvertēšanu no viena tipa uz citu. Bet pirms tam ir svarīgi izcelt šādu Raku īpatnību. Kad jūs pielietojat booleānas operācijas virknēm vai integeriem, vērtības netiek konvertētas uz booleāniem, un rezultāts arī nav booleāna vērtība. Apskatīsim šādus piemērus:

```raku
say 'Hello' && 'World'; # World
say 'Alpha' || 'Beta';  # Alpha
say 0 ^^ 42;            # 42
```

Izlasīsim noteikumus 📖 [no dokumentācijas](https://docs.raku.org/language/operators#Tight_AND_precedence):

* `&&` atgriež pirmo argumentu, kas booleāna kontekstā tiek novērtēts kā False, pretējā gadījumā atgriež pēdējo argumentu.
* `||` atgriež pirmo argumentu, kas booleāna kontekstā tiek novērtēts kā True, pretējā gadījumā atgriež pēdējo argumentu.
* `^^` atgriež True argumentu, ja tāds ir (un tikai viens). Atgriež pēdējo argumentu, ja visi argumenti ir False. Atgriež `Nil`, ja vairāk nekā viens arguments ir True.

Pievērsiet uzmanību, ka mēs tikko sastāpāmies ar ‘null’ vērtību `Nil`.

{% include nav.html %}