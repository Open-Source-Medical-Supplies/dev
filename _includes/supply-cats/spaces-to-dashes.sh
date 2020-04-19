#! /usr/bin/env bash
for file in *; do mv "$file" `echo $file | tr ' ' '-'` ; done
