---
title: Stern, Plus und Fragezeichen
translations_gpt:
---

{% include menu.html %}

Drei Zeichen decken die häufigsten Fälle ab. Jedes bezieht sich auf das Element unmittelbar davor:

* `*` — null- oder mehrmals
* `+` — ein- oder mehrmals
* `?` — null- oder einmal (optional)

Das Pluszeichen trifft eine Folge von einem oder mehreren Zeichen:

```raku
say 'aaah' ~~ / a+ /; # ｢aaa｣
```

Es hat so viele `a` getroffen, wie es konnte — drei davon.

Der Stern ist wie das Plus, gelingt aber auch dann, wenn es nichts zu treffen gibt, denn null Wiederholungen sind erlaubt:

```raku
say 'colour' ~~ / colou*r /; # ｢colour｣
say 'color'  ~~ / colou*r /; # ｢color｣
```

Das Fragezeichen macht ein Stück optional — es trifft, ob das Stück da ist oder nicht:

```raku
say 'colour' ~~ / colou?r /; # ｢colour｣
say 'color'  ~~ / colou?r /; # ｢color｣
```

Quantoren beziehen sich auf das, was unmittelbar vor ihnen steht, auch auf eine Zeichenklasse. So trifft `\d+` eine Folge von einer oder mehreren Ziffern — eine ganze Zahl:

```raku
say 'order 66' ~~ / \d+ /; # ｢66｣
```

{% include nav.html %}
