---
title: Subprogrammata et methodi
translations_gpt:
---

{% include menu.html %}

Nunc duos modos habes agendi rationem includendi: _subprogramma_ et _methodum_. Similia videntur sed aliter adhibentur.

Subprogramma per se stat. Illud nomine vocas et omnia quibus eget ut argumenta tradis:

```raku
sub area-of($radius) {
    π * $radius * $radius;
}

say area-of(2); # 12.566370614359172
```

Methodus ad classem pertinet et in obiecto cum puncto vocatur. Propriis obiecti datis per `self` et accessores attributorum uti potest, itaque illa data non tradis:

```raku
class Circle {
    has $.radius;

    method area {
        π * $.radius * $.radius;
    }
}

say Circle.new(radius => 2).area; # 12.566370614359172
```

Utrumque eundem numerum computat. Differentia est unde data veniant: subprogramma radium ut argumentum accipit, dum methodus illum ex obiecto in quo vocata est legit.

Ut regula pollicis, utere subprogrammate pro operatione solitaria quae argumenta sua simpliciter transformat, et methodo cum agendi ratio naturaliter ad obiectum pertinet et cum proprio illius obiecti statu operatur. Pro proceduris classi propriis sed generalibus, utere methodis classis.

{% include nav.html %}
