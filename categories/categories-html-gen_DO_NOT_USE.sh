#! /usr/bin/env bash

for file in ../_includes/supply-cats/*.md;
    do cp ./template.html ./$(basename $file .md).html;
    #sed -i "s/web-name/$(basename $file .md)/g" $(basename $file .md).html;
done
