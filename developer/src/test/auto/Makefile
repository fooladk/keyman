#
# E2E and Unit Tests for Keyman Developer projects
#

# ----------------------------------------------------------------------

TARGETS=developer-tests

test:
    $(MAKE) "TARGET=test" $(TARGETS)

!include ..\..\Header.mak

# ----------------------------------------------------------------------

developer-tests: \
  compile-supplementary-support \
  keyboard-js-info \
  kmcomp \
  kmconvert \
  kmx-file-languages \
  model-ts-parser \
  package-info \
  kmc \
  kmc-analyze \
  kmc-keyboard-info \
  kmc-kmn \
  kmc-ldml \
  kmc-model \
  kmc-model-info \
  kmc-package \
  kmcmplib

# ----------------------------------------------------------------------

compile-supplementary-support: .virtual
  cd $(DEVELOPER_ROOT)\src\test\auto\compile-supplementary-support
  $(MAKE) $(TARGET)

keyboard-js-info: .virtual
    cd $(DEVELOPER_ROOT)\src\test\auto\keyboard-js-info
    $(MAKE) $(TARGET)

kmx-file-languages: .virtual
    cd $(DEVELOPER_ROOT)\src\test\auto\kmx-file-languages
    $(MAKE) $(TARGET)

kmcomp: .virtual
  cd $(DEVELOPER_ROOT)\src\test\auto\kmcomp
  $(MAKE) $(TARGET)

kmconvert: .virtual
  cd $(DEVELOPER_ROOT)\src\test\auto\kmconvert
  $(MAKE) $(TARGET)

model-ts-parser: .virtual
  rem TODO
#  cd $(DEVELOPER_ROOT)\src\test\auto\model-ts-parser
#  $(MAKE) $(TARGET)

package-info: .virtual
  cd $(DEVELOPER_ROOT)\src\test\auto\package-info
  $(MAKE) $(TARGET)

# ----------------------------------------------------------------------
# Tests outside the test/auto folder
# ----------------------------------------------------------------------

kmc: .virtual
  cd $(DEVELOPER_ROOT)\src\kmc
  $(MAKE) $(TARGET)

kmc-analyze: .virtual
  cd $(DEVELOPER_ROOT)\src\kmc-analyze
  $(MAKE) $(TARGET)

kmc-keyboard-info: .virtual
  cd $(DEVELOPER_ROOT)\src\kmc-keyboard-info
  $(MAKE) $(TARGET)

kmc-kmn: .virtual
  cd $(DEVELOPER_ROOT)\src\kmc-kmn
  $(MAKE) $(TARGET)

kmc-ldml: .virtual
  cd $(DEVELOPER_ROOT)\src\kmc-ldml
  $(MAKE) $(TARGET)

kmc-model: .virtual
  cd $(DEVELOPER_ROOT)\src\kmc-model
  $(MAKE) $(TARGET)

kmc-model-info: .virtual
  cd $(DEVELOPER_ROOT)\src\kmc-model-info
  $(MAKE) $(TARGET)

kmc-package: .virtual
  cd $(DEVELOPER_ROOT)\src\kmc-package
  $(MAKE) $(TARGET)

kmcmplib: .virtual
  cd $(DEVELOPER_ROOT)\src\kmcmplib
  $(MAKE) $(TARGET)

# ----------------------------------------------------------------------

!include ..\..\Target.mak

# ----------------------------------------------------------------------
# EOF
# ----------------------------------------------------------------------
