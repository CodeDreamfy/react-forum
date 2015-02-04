#!/bin/bash

#Env
NODE_PATH="/usr/local/bin"
NODE_COMMAND="node --harmony"
NODE_SCRIPT="$(pwd)/app.js"

export NODE_ENV=dev
export PATH=$NODE_PATH:$PATH

#Exc
gulp default
open http://localhost:3000
node --harmony $NODE_SCRIPT
