---
title: Mantošanas ķēde
translations_gpt:
---

{% include menu.html %}

Kad viena klase manto no citas, var palūgt visu tipu ķēdi, uz kuras tā ir uzbūvēta. Metametode `.^mro` atgriež šo ķēdi — nosaukums cēlies no _method resolution order_, tas ir, secības, kādā Raku meklē metodi.

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^mro; # ((Dog) (Animal) (Any) (Mu))
```

Lasot no kreisās puses: `Dog` vispirms ir pats, tad `Animal` (tā vecākklase), tad `Any` un `Mu` — divi tipi, no kuriem pašā augšā manto katrs Raku objekts. Kad uz `Dog` izsaucat metodi, Raku pārmeklē šo sarakstu no kreisās uz labo un izmanto pirmo atrasto atbilstošo metodi. Tieši tāpēc bērnklases metode pārraksta vecākklases: bērnklase ķēdē parādās agrāk.

Klasei bez skaidri norādītas vecākklases ķēde ir īsāka — tikai pati klase, kam seko `Any` un `Mu`.

{% include nav.html %}
