---
title: Quiz — Interpolating hashes
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
&lt;β&gt; | say &quot;The letter β is called %letters␣␣.&quot;;

## 2

Using the hash, print the name of the Greek letter `β`. Use the form where the key is quoted in single quotes.

{:.quiz-code}
{&apos;β&apos;} | say &quot;The letter β is called %letters␣␣␣␣.&quot;;


## 3

Print the letters and their names as a table.

{:.quiz-code}
letters{ | say &quot;Here are some Greek letters:\n%␣␣␣␣␣}\netc.&quot;; | Note that the output may be not sorted.

The possible output for this case is:

    Here are some Greek letters:
    α	Alpha
    β	Beta
    γ	Gamma
    etc.

{% include quiz.html %}

{% include nav.html %}
