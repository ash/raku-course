---
title: Exercise ’Employees and roles‘
---

{% include menu.html %}

## Problem

Define a base class `Employee` with a `name` attribute, a method `role` that returns `'staff'`, and a method `badge` that returns the string `<name> - <role>` (using its own `role`).

Then define two child classes, `Manager` and `Intern`, that inherit from `Employee` and override `role` to return `'manager'` and `'intern'` respectively.

Print the badge of a manager named `Anna` and an intern named `Bob`.

## Example

The program prints:

```
Anna - manager
Bob - intern
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
