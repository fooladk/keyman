#!/usr/bin/env bash
#
# Compile our sourcemap-path remapping module for use by Web builds, releases, etc.
#
set -eu

## START STANDARD BUILD SCRIPT INCLUDE
# adjust relative paths as necessary
THIS_SCRIPT="$(greadlink -f "${BASH_SOURCE[0]}" 2>/dev/null || readlink -f "${BASH_SOURCE[0]}")"
. "$(dirname "$THIS_SCRIPT")/../../../resources/build/build-utils.sh"
## END STANDARD BUILD SCRIPT INCLUDE

. "$KEYMAN_ROOT/resources/shellHelperFunctions.sh"

# This script runs from its own folder
cd "$(dirname "$THIS_SCRIPT")"

################################ Main script ################################

builder_describe "Builds the predictive-text wordbreaker implementation module" \
  "clean" \
  "configure" \
  "build" \
  "test" \
  "--ci"

builder_describe_outputs \
  configure          /node_modules \
  build              build/obj/index.js

builder_parse "$@"

function do_build() {
  tsc -b

  # Declaration bundling.
  tsc --emitDeclarationOnly --outFile ./build/lib/index.d.ts
}

function do_test() {
  if builder_has_option --ci; then
    c8 mocha -reporter mocha-teamcity-reporter
  else
    c8 mocha
  fi
}

builder_run_action configure  verify_npm_setup
builder_run_action clean      rm -rf build/
builder_run_action build      do_build
builder_run_action test       do_test