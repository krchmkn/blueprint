#!/bin/bash
SRC="src/$1"
FILE="$SRC/index.ts"

if test -f "$FILE"; then
  echo "File $FILE already exists. Exit."
  exit 1
fi

mkdir $SRC
touch "$SRC/index.ts"
echo "- [$1](src/$1/index.ts)" >> README.md

GREEN="\033[0;32m"
BOLDGREEN='\033[1;32m'
echo -e "${GREEN}Generated${GREEN} ${BOLDGREEN}$SRC${BOLDGREEN}"
