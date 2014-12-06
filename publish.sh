#!/bin/bash
find . -name .DS_Store | xargs rm
find . -name "*~" | xargs rm
cd ./dist
tar czf - ./public_html | pv | ssh aw@80.86.92.244 tar xzf - -C /home/aw/www/andersw.info

