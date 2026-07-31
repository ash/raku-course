---
title: Vairāku lomu apvienošana
translations_gpt:
---

{% include menu.html %}

Klase var darīt vairāk nekā vienu lomu. Vienkārši uzskaitiet katru ar savu `does`:

```raku
role Walk {
    method move { 'walking' }
}

role Swim {
    method dive { 'diving' }
}

class Duck does Walk does Swim {
}
```

Klasei `Duck` tagad ir gan metode `move` no `Walk`, gan metode `dive` no `Swim`:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Šādu lomu apvienošanu sauc par _komponēšanu_. Tā ļauj klasi salikt no vairākiem neatkarīgiem uzvedības gabaliem, un tas bieži ir elastīgāk nekā būvēt vienu mantošanas ķēdi — klase var iemaisīt tieši tās spējas, kas tai vajadzīgas, un neko vairāk.

{% include nav.html %}
