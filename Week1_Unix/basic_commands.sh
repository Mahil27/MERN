#!/bin/bash

# Print current directory
pwd

# List files
ls -la

# Create directories
mkdir testDir

# Move into directory
cd testDir

# Create file
touch file1.txt

# Write text into file
echo "Hello Unix" > file1.txt

# Display file content
cat file1.txt

# View file using less
less file1.txt

# Remove file
rm file1.txt

# Move back
cd ..

# Remove directory
rmdir testDir
