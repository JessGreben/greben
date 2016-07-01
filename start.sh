#!/bin/bash
set -e

CMD="$1"

until nc -z mongo 27017
do
    sleep 1
done

if [[ "$CMD" != "" ]]; then
    echo "$CMD"
    exec "$CMD"
fi

