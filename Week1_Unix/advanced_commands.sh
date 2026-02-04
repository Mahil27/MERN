#!/bin/bash

# Search text inside files
echo "apple" > fruits.txt
echo "banana" >> fruits.txt

grep "apple" fruits.txt

# Find files
find . -name "*.txt"

# Permissions
touch script.sh
chmod +x script.sh

# Pipes and Redirection
ls | grep ".sh" > shell_files.txt

# Background job
sleep 10 &
echo "Background job running"
