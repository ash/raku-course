---
title: De TOP-regel
translations_gpt:
---

{% include menu.html %}

Wanneer je een string met een grammatica ontleedt, begint Raku bij een token met de naam `TOP`. Dat is het startpunt — de beschrijving van de **hele** invoer. Al het andere in de grammatica bestaat om dat te ondersteunen.

Een `TOP`-token verwijst gewoonlijk op naam naar andere tokens en breekt het probleem zo in kleinere delen op:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}
```

Lees `TOP` hardop: "een sleutel, dan een isgelijkteken, dan een waarde". De tokens `key` en `value` zeggen hoe elk van die delen eruitziet. Deze verdeling is de hele bedoeling van een grammatica — elk token heeft één kleine, duidelijk benoemde taak, en `TOP` zet ze in elkaar.

`TOP` is slechts een conventie die door `.parse` afgedwongen wordt; de andere tokens mag je noemen zoals je wilt. De namen die je kiest worden ook de benoemde captures in het resultaat, dus een goed benoemde grammatica levert een zelfbeschrijvende matchboom op, zoals je zo zult zien.

{% include nav.html %}
