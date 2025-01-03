# Javascript function bug

This repository contains a Javascript function with a potential bug related to null or undefined parameters. The function `foo` is intended to return 0 if either `a` or `b` is null, but it doesn't explicitly handle other falsy values, which might lead to unexpected results.

## Bug Description

The `foo` function does not correctly handle cases where parameters are null or undefined, or other falsy values, potentially resulting in incorrect calculations or unexpected behavior.

## Bug Solution

The provided solution includes improved type checking and handling of falsy values to avoid unexpected behavior. It ensures the function behaves as expected in all cases. 
