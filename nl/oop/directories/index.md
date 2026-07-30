---
title: Met mappen werken
translations_gpt:
---

{% include menu.html %}

Om met het bestandssysteem zelf te werken — nagaan wat er bestaat en mappen aanmaken — gebruikt Raku _padobjecten_. Elke string kan er met de methode `.IO` in omgezet worden, en het padobject beantwoordt dan vragen over dat pad.

De meest voorkomende vragen zijn of een pad bestaat en wat voor ding het is:

```raku
spurt 'greeting.txt', 'hi';

say 'greeting.txt'.IO.e; # True  — does it exist?
say 'greeting.txt'.IO.f; # True  — is it a file?
say 'greeting.txt'.IO.d; # False — is it a directory?
```

`.e` test op bestaan, `.f` test op een gewoon bestand, en `.d` test op een map.

Om een nieuwe map aan te maken gebruik je `mkdir`:

```raku
mkdir 'reports';
say 'reports'.IO.d; # True
```

Het volgende onderwerp laat zien hoe je opsomt wat een map bevat.

{% include nav.html %}
