---
title: Overzicht van operatorgedrag
translations_gpt:
---

{% include menu.html %}

Wanneer een expressie meerdere operatoren bevat, moet Raku beslissen in welke volgorde ze worden toegepast. Twee regels bepalen dit: _voorrang_ en _associativiteit_.

## Voorrang

Voorrang bepaalt welke operator sterker bindt. Vermenigvuldiging heeft een hogere voorrang dan optelling, dus wordt deze eerst uitgevoerd:

```raku
say 2 + 3 * 4; # 14
```

De expressie wordt gelezen als `2 + (3 * 4)`, wat `14` oplevert in plaats van `20`. Je kunt altijd haakjes gebruiken om een andere volgorde af te dwingen:

```raku
say (2 + 3) * 4; # 20
```

## Associativiteit

Associativiteit bepaalt de volgorde tussen operatoren met _dezelfde_ voorrang. Aftrekking is links-associatief, dus wordt er van links naar rechts gegroepeerd:

```raku
say 8 - 3 - 2; # 3
```

Dit is `(8 - 3) - 2`, wat `3` oplevert. Machtsverheffing daarentegen is rechts-associatief:

```raku
say 2 ** 3 ** 2; # 512
```

Hier wordt de expressie gegroepeerd als `2 ** (3 ** 2)`, dat wil zeggen `2 ** 9`, wat `512` is.

## Geschakelde vergelijkingen

Vergelijkingsoperatoren kunnen _geschakeld_ worden, wat natuurlijk leest en doet wat je verwacht vanuit de wiskunde:

```raku
say 1 < 2 < 3; # True
say 1 < 5 < 3; # False
```

De middelste waarde wordt met beide buren vergeleken: `1 < 2 < 3` is waar omdat `1 < 2` en `2 < 3` beide waar zijn.

{% include nav.html %}
