#!/bin/bash

set -e

"$(npm bin)/tsc" --noEmit --watch &
"$(npm bin)/parcel" ./src/index.html --https --port 443