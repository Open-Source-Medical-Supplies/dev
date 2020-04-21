#! /usr/bin/env bash
echo "This will remove the first 2 lines of all Markdown files in this directory."
read -r -p "Run script? [y/N]: " response

if [[ "$response" =~ ^[yY] ]]
then
  for file in *.md
  do
      sed -i -e "1,2d" "$file"
      rm "*.md-e"
  done
fi
