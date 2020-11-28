#!/bin/bash

if [[ "$1" = "-p" ]]; then
    export JEKYLL_ENV="production";
fi

bundle exec jekyll serve --open-url
