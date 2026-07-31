---
title: Methodi classis
translations_gpt:
---

{% include menu.html %}

Plerique methodi in obiecto vocantur — in exemplari classis. Sed methodus etiam in ipsa classe vocari potest, id est, in obiecto generis. Talis methodus saepe _methodus classis_ appellatur. Utilis est pro valoribus et operationibus quae ad classem totam potius quam ad unum certum obiectum pertinent.

Methodum classis exacte sicut quamlibet aliam methodum definis:

```raku
class Road {
    method speed-limit { 120 }
}
```

et eam in nomine classis loco exemplaris vocas:

```raku
say Road.speed-limit; # 120
```

Methodo classis iam usus es sine eius nomine: `new` est methodus in classe vocata ut novum obiectum creetur.

Methodus classis ad attributa exemplaris accessum non habet — nullum certum obiectum post eam est — itaque solum cum informatione operatur quae omni obiecto classis eadem est. Cum labor a datis certi obiecti pendet, utere methodo ordinaria in exemplari vocata; cum non pendet, methodus classis naturaliter convenit.

Nota, quamquam methodi classis exemplari non egent, tamen fieri posse ut in eis datis obiecti utaris cum obiectum habes:

```raku
class Road {
    has $.name;
    method speed-limit { 120 }

    method info {
        "The maximum speed on $.name is " ~ self.speed-limit
    }
}

my $R404 = Road.new(name => 'Road 404');
say $R404.info;
```

Hoc programma effectum exspectatum imprimit:

```
The maximum speed on Road 404 is 120
```

Sine obiecto classis exemplato, vocatio qualis `say Road.info` errorem produceret.

{% include nav.html %}
