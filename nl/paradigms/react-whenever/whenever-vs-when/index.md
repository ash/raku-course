---
title: whenever versus when
translations_gpt:
---

{% include menu.html %}

De vorm van een `react`-blok komt misschien bekend voor. Een buitenblok dat meerdere binnenblokken bevat die elk op het onderwerp `$_` werken, is precies hoe [`given`/`when`](/nl/advanced/given-when) geschreven wordt. Had je één enkele temperatuurmeting in plaats van een hele stroom ervan, dan zou je er zo op vertakken:

```raku
given $temperature {
    when 18 { say 'cool' }
    when 21 { say 'warm' }
}
```

De gelijkenis met `react`/`whenever` is echt, maar de twee doen heel verschillend werk:

* **`given`/`when` behandelt één waarde, nu meteen.** `given` zet `$_` op één enkele waarde; elke `when` test die (`$_ ~~ 18`), de **eerste** die matcht draait, en het blok is klaar. Het is een gewone, synchrone voorwaarde.
* **`react`/`whenever` behandelt veel waarden, in de loop van de tijd.** Een `whenever` test `$_` niet tegen een patroon — hij *abonneert* zich op een supply, en zijn body draait voor **elke** waarde die die supply uitzendt, wanneer die waarde ook binnenkomt. Alle `whenever`s zijn tegelijk actief, en `react` blijft blokkeren tot elk van hun supplies klaar is.

`when` vraagt dus "matcht deze ene waarde?", terwijl `whenever` zegt "doe dit voor elke waarde die deze stroom ooit oplevert". Hetzelfde skelet, heel verschillende levens: een tak die één keer genomen wordt, tegenover een reactie die telkens opnieuw draait zodra er gebeurtenissen binnenkomen.

{% include nav.html %}
