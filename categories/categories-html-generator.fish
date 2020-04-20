#! /usr/bin/env fish
#  WARNING: running this script will overwrite all .html files in this
#  directory using `template.html` as a template, and replacing instances
#  of `web-name` with the basename of markdown files pulled from
#  ../_includes/supply-cats
#  YOU HAVE BEEN WARNED!!!
#

echo "Running this script will overwrite all .html files in this directory. "

if read_confirm
    for file in ../_includes/supply-cats/*.md
          set category = (basename $file .md)
          cp ./template.html ./$category.html
          sed -i "s/web-name/$category/g" ./$category.html
    end
end
