#!/bin/bash

echo "$(xrandr --verbose --current | grep ^"eDP-1" -A5 | tail -n1 | awk -F ":" '{print $2}')"
