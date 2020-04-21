#! /usr/bin/env python3
import glob
from shutil import copyfile

SOURCE_FILE = "gen-template.html"

for f in glob.glob("*.html"):
    if f != SOURCE_FILE:
        copyfile(SOURCE_FILE, f)

    with open(f, "r") as infile:
        category = f.split(".")
        new_text = infile.read().replace('gen-template', category[0])

    with open(f, "w") as outfile:
        outfile.write(new_text)
