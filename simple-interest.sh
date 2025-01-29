#!/bin/bash

# Simple Interest Calculation
echo "Enter Principal Amount:"
read principal
echo "Enter Rate of Interest:"
read rate
echo "Enter Time Period in years:"
read time

# Simple Interest formula
simple_interest=$(echo "$principal * $rate * $time / 100" | bc)

echo "The Simple Interest is: $simple_interest"
