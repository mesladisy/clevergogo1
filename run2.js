#!/bin/sh
UUID=${UUID:-'54bfccef-6deb-45f2-8361-fb34523efc52'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
