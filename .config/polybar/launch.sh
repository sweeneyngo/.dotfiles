#!/usr/bin/env bash

killall -q polybar

# Wait until processes shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done;

echo "---" | tee -a /tmp/tam.log
echo "Loading polybar..."
polybar tam 2>&1 | tee -a /tmp/tam.log &
echo "Bars launched..."

