---
title: Arithmetica dierum
---

{% include menu.html %}

Dies arithmeticam sustinent, quod multas computationes cotidianas simplices reddit.

Addendo numerum integrum ad diem eum promovet tot diebus. Eventus est novus dies, mense et anno automatice accommodatis:

```raku
say Date.new(2026, 6, 27) + 7; # 2026-07-04
```

Subtrahendo unum diem ab alio dat numerum dierum inter eos:

```raku
say Date.new(2026, 7, 4) - Date.new(2026, 6, 27); # 7
```

Pro maioribus passibus, methodi `later` et `earlier` argumenta nominata accipiunt sicut `:days`, `:months`, vel `:years`:

```raku
say Date.new(2026, 6, 27).later(:days(10));    # 2026-07-07
say Date.new(2026, 6, 27).earlier(:months(2)); # 2026-04-27
```

Hae methodi arithmeticam rectam servant trans fines mensium et annorum, itaque numquam sollicitari debes quot dies mensis particularis habeat.

{% include nav.html %}
