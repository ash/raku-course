---
title: 'Тест — whenever и done'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_);
        done if $_ == 2;
    }
    whenever Supply.from-list(10, 20) {
        @out.push($_);
    }
}

say @out;
```

{:.quiz}
1 | [1 2]
0 | [1 2 10 20]
0 | [1 2 3 10 20]
0 | [10 20]

{% include quiz.html %}

<div class="extended-explanation">

Първият `whenever` слага `1`, после `2` — и при `2` извиква `done`. Решаващото е, че `done` прекратява **целия блок `react`**, а не само своя `whenever`: остатъкът от първия поток (`3`) и *целият втори поток* (`10, 20`) са отрязани, преди да бъдат доставени. Затова `@out` съдържа само `[1 2]`. Ако `done` заглушаваше само собствената си струя, щяхте да видите `[1 2 10 20]` — но едно `done` спира всички реакции наведнъж.

</div>

{% include nav.html %}
