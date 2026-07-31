---
title: Pigrae et infinitae series
translations_gpt:
---

{% include menu.html %}

Series non omnes valores suos simul computare debet. Series in Raku _pigrae_ sunt: unusquisque valor solum cum re vera opus est producitur. Hoc efficit ut seriem describere possis quae omnino finem non habet.

Ad seriem infinitam scribendam, `Inf` ut finem adhibeas. Seriem parenthesibus circumda, quia `...` laxius quam `=` ligat:

```raku
my $naturals = (1 ... Inf);
```

Sine parenthesibus, `my $naturals = 1 ... Inf` solum `1` variabili assignaret et deinde seriem per se construeret -- et series infinita sine effectu evaluata programma suspenderet.

Nihil adhuc computatum est. Series valores solum cum petis tradet. Methodus `head` primos paucos sumit:

```raku
say (1 ... Inf).head(5); # (1 2 3 4 5)
```

Quamvis series infinita sit, solum primi quinque numeri generantur. Sine pigritia, programma quod totam seriem infinitam construere conaretur numquam finiret.

Pro serie finita, methodus `tail` valores a fine sumit:

```raku
say (1 ... 100).tail(3); # (98 99 100)
```

Pigritia est quae te sinit _descriptionem_ seriei a decisione quantum eius utaris separare.

{% include nav.html %}
