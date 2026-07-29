---
title: Компониране на няколко роли
translations_gpt:
---

{% include menu.html %}

Класът може да изпълнява повече от една роля. Просто изброявате всяка със свое `does`:

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

Класът `Duck` вече има и метода `move` от `Walk`, и метода `dive` от `Swim`:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Такова съчетаване на роли се нарича _композиция_. То ви позволява да сглобите клас от няколко независими парчета поведение, което често е по-гъвкаво от изграждането на една-единствена верига от наследявания — класът може да смеси точно тези способности, които са му нужни, и нищо повече.

{% include nav.html %}
