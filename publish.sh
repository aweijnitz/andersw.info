#!/bin/bash
find . -name .DS_Store | xargs rm
find . -name "*~" | xargs rm
find . -name '#*#' | xargs rm
cd ./dist
tar czf - ./public_html | ssh -i ~/.ssh/hetzner.cloud aw@159.69.157.46 tar xzf - -C /home/aw/www/andersw.info

