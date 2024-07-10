#!/bin/bash 

FOUNDRY_DIR=~/AppData/Local/FoundryVTT
'''
This script deploys the necessary mod files into the appropriate Foundry module directory on the local machine.
Set $FOUNDRY_DIR above to point at your FoundryVTT user data folder.
'''
MOD_DIR=$FOUNDRY_DIR/Data/modules/discord-bot

mkdir -p $MOD_DIR
cp -r lang $MOD_DIR
cp -r scripts $MOD_DIR
cp -r styles $MOD_DIR
cp module.json $MOD_DIR
