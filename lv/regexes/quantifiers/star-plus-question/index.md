---
title: Zvaigznīte, plus un jautājuma zīme
translations_gpt:
---

{% include menu.html %}

Trīs simboli aptver biežākos gadījumus. Katrs attiecas uz elementu, kas ir tieši pirms tā:

* `*` — nulle vai vairāk reižu
* `+` — viena vai vairāk reižu
* `?` — nulle vai viena reize (neobligāti)

Plusa zīme piemeklē vienas vai vairāku rakstzīmju virteni:

```raku
say 'aaah' ~~ / a+ /; # ｢aaa｣
```

Tā piemeklēja tik `a`, cik varēja, — trīs.

Zvaigznīte ir tāda pati kā pluss, taču tā izdodas arī tad, kad piemeklēt nav nekā, jo ir atļautas nulle atkārtojumu:

```raku
say 'colour' ~~ / colou*r /; # ｢colour｣
say 'color'  ~~ / colou*r /; # ｢color｣
```

Jautājuma zīme padara gabalu neobligātu — tā piemeklē neatkarīgi no tā, vai gabals ir vai nav:

```raku
say 'colour' ~~ / colou?r /; # ｢colour｣
say 'color'  ~~ / colou?r /; # ｢color｣
```

Kvantori attiecas uz to, kas ir tieši pirms tiem, arī uz rakstzīmju klasi. Piemēram, `\d+` piemeklē vienu vai vairāku ciparu virteni — veselu skaitli:

```raku
say 'order 66' ~~ / \d+ /; # ｢66｣
```

{% include nav.html %}
