#! /usr/bin/env bash
#  WARNING: running this script will overwrite all .html files in this
#  directory using `template.html` as a template, and replacing instances
#  of `web-name` with the basename of markdown files pulled from
#  ../_includes/supply-cats
#  YOU HAVE BEEN WARNED!!!
#

echo "Running this script will overwrite all .html files in this directory. "
read -p "Do you want to run this script? [Yy/Nn]: " -n 1 -r

# if [[ ! $REPLY =~ ^[Yy]$ ]]
# then
#     categories=()
#   
#   eval $(for file in ../_includes/supply-cats/*.md;do
#   categories+=($(basename $file .md))
# done)
#   
#   for file in ../_includes/supply-cats/*.md;
#       do category = $(basename $file .md);
#       cp ./template.html ./$category.html;
#       sed -i "s/web-name/$category/g" ./$category.html;
#   done
# fi
