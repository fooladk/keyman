#
# Mcompile Makefile
#

!include ..\..\Defines.mak

build: manifest.res version.res dirs
    $(MSBUILD) mcompile.sln $(MSBUILD_BUILD)
    $(COPY) $(WIN32_TARGET_PATH)\mcompile.exe $(PROGRAM)\engine
    $(COPY) $(WIN32_TARGET_PATH)\mcompile.pdb $(DEBUGPATH)\engine

clean: def-clean
    $(MSBUILD) $(MSBUILD_CLEAN) mcompile.sln
    -rd /s/q debug
    -rd /s/q release
    -rd /s/q ipch

signcode:
    $(SIGNCODE) /d "Keyman Engine Mnemonic Keyboard Recompiler" $(PROGRAM)\engine\mcompile.exe

wrap-symbols:
    $(SYMSTORE) $(PROGRAM)\engine\mcompile.exe /t keyman-engine-windows
    $(SYMSTORE) $(DEBUGPATH)\engine\mcompile.pdb /t keyman-engine-windows

install:
    $(COPY) $(PROGRAM)\engine\mcompile.exe "$(INSTALLPATH_KEYMANENGINE)"

test-manifest:
# test that linked manifest exists and correct
    $(MT) -nologo -inputresource:$(PROGRAM)\engine\mcompile.exe -validate_manifest

!include ..\..\Target.mak
