---
title: Quiz — Interpolating hashes
---

{% include menu.html %}

Given the following hash:

```raku
my %letters = α => 'Alpha', β => 'Beta', γ => 'Gamma';
```

Complete the below programs to get the requested output.

## 1

Using the hash, print the name of the Greek letter `β`. Use the form without quotes around the key string.

{:.quiz-code}
&lt;β&gt; | dic &quot;Littera β vocatur %letters␣␣.&quot;;

## 2

Using the hash, print the name of the Greek letter `β`. Use the form where the key is quoted in single quotes.

{:.quiz-code}
{&apos;β&apos;} | dic &quot;Littera β vocatur %letters␣␣␣␣.&quot;;

## 3

Print the letters and their names as a table.

{:.quiz-code}
litterae{ | dic &quot;Hic sunt nonnullae litterae Graecae:\n%␣␣␣␣␣}\netc.&quot;; | Nota quod output non ordinatum esse potest.

The possible output for this case is:

    Hic sunt nonnullae litterae Graecae:
    α	Alpha
    β	Beta
    γ	Gamma
    etc.

{% include quiz.html %}

{% include nav.html %}