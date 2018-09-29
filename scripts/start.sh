#!/usr/bin/env bash

CONFIG_DIR=config
ENV_FILE=dev.env
ENV_LOCAL_FILE=dev.local.env

source $CONFIG_DIR/$ENV_FILE
export $(cut -d= -f1 $CONFIG_DIR/$ENV_FILE)

if test -f $CONFIG_DIR/$ENV_LOCAL_FILE; then
  source $CONFIG_DIR/$ENV_LOCAL_FILE
  export $(cut -d= -f1 $CONFIG_DIR/$ENV_LOCAL_FILE)
fi

npx webpack-dev-server --config config/webpack.config.dev.js
