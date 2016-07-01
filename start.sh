#!/bin/bash
set -e

CMD="$1"

#hard code name of linked mongo container
export mongo_host="mongo"

#wait for successful mongo connection
until nc -z $mongo_host 27017
do
    sleep 1
done

# if there is a command to run when 
# `docker-compose run CMD`, then execute it
if [[ "$CMD" != "" ]]; then
    echo "$CMD"
    exec "$CMD"
fi

