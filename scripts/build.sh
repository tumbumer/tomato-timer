#!/usr/bin/env bash

CONFIG_DIR=config
ENV_FILE=prod.env
ENV_LOCAL_FILE=prod.local.env

source $CONFIG_DIR/$ENV_FILE
export $(cut -d= -f1 $CONFIG_DIR/$ENV_FILE)

if test -f $CONFIG_DIR/$ENV_LOCAL_FILE; then
  source $CONFIG_DIR/$ENV_LOCAL_FILE
  export $(cut -d= -f1 $CONFIG_DIR/$ENV_LOCAL_FILE)
fi

 npx webpack --config config/webpack.config.prod.js
