---
title: Предефиниране на методи
translations_gpt:
---

{% include menu.html %}

Дъщерният клас може да предостави своя собствена версия на наследен метод. Това се нарича _предефиниране_. Когато методът се извика върху обект от дъщерния клас, се изпълнява версията на дъщерния клас вместо тази на родителя.

```raku
class Animal {
    has $.name;
    method speak {
        'some sound';
    }
    method intro {
        "$.name says " ~ self.speak;
    }
}

class Dog is Animal {
    method speak {
        'Woof';
    }
}

class Cat is Animal {
    method speak {
        'Meow';
    }
}
```

`Dog` и `Cat` предефинират всеки своя `speak`. Методът `intro`, наследен непроменен от `Animal`, извиква `self.speak` — и това извикване използва онзи `speak`, който принадлежи на действителния обект:

```raku
say Dog.new(name => 'Rex').intro; # Rex says Woof
say Cat.new(name => 'Tom').intro; # Tom says Meow
```

Така един и същ наследен `intro` дава различни резултати, защото всеки обект носи свой собствен `speak`. Това е една от централните идеи на обектно-ориентираното програмиране: споделен код, който се приспособява към конкретния вид обект, върху който работи.

{% include nav.html %}
