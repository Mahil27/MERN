#!/bin/bash

name="Student"
echo "Hello $name"

# Loop
for i in {1..5}
do
  echo "Number: $i"
done

# Conditional
if [ $name == "Student" ]; then
  echo "Welcome learner!"
else
  echo "Unknown user"
fi
