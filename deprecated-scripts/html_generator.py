#! /usr/bin/env python3
"""
   This module regenerates .html pages based off of the template provided by
   `web-name.html` and replaces all instances of `web-name` within the file
   with the basename of the .html file given as input
"""

from shutil import copyfile
from os import path
import glob

PLACEHOLDER = 'web-name'
SKIP = ['medSupplyGuideMain.md']
TEMPLATE = 'html-generator-template.html'

for p in glob.glob('../_includes/category/*.md'):
    f = path.basename(p)

    if f in SKIP:
        continue

    category = ''.join(f.split('.')[:-1])
    html_file = (category + '.html')

    copyfile(TEMPLATE, html_file)

    with open(html_file, 'r') as infile:
        new_text = infile.read().replace(PLACEHOLDER, category)

    with open(html_file, 'w') as outfile:
        outfile.write(new_text)
