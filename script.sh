#!/bin/bash
YELLOW="\033[0;33m"
echo -e "${YELLOW}WARNING: This script for macOS only${YELLOW}"
SRC="src/$1"

mkdir $SRC
touch "$SRC/index.ts"
echo "- [$1](src/$1/index.ts)" >> README.md

GREEN="\033[0;32m"
BOLDGREEN='\033[1;32m'
echo -e "${GREEN}Generated${GREEN} ${BOLDGREEN}$SRC${BOLDGREEN}"
