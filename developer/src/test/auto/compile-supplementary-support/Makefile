#
# test if KS=1 is in the right files, both in debug and non-debug versions
#

KMC="..\..\..\..\bin\kmc.cmd" build
KMC_DEBUG=$(KMC) -d

test: test-nodebug test-debug

KMN=i3317_nosupp.kmn i3317_withsupp.kmn i3317_withsupp_incontext.kmn i3317_withsupp_inmatch.kmn i3317_withsupp_innomatch.kmn i3317_withsupp_instore.kmn

# TODO: replace with build.sh script
test-nodebug:
	$(KMC) $(KMN)
	findstr /v /m "KS=1" i3317_nosupp.js
	findstr /m "KS=1" i3317_withsupp.js
	findstr /m "KS=1" i3317_withsupp_incontext.js
	findstr /m "KS=1" i3317_withsupp_inmatch.js
	findstr /m "KS=1" i3317_withsupp_innomatch.js
	findstr /m "KS=1" i3317_withsupp_instore.js

test-debug:
	$(KMC_DEBUG) $(KMN)
	findstr /v /m "KS=1" i3317_nosupp.js
	findstr /m "KS=1" i3317_withsupp.js
	findstr /m "KS=1" i3317_withsupp_incontext.js
	findstr /m "KS=1" i3317_withsupp_inmatch.js
	findstr /m "KS=1" i3317_withsupp_innomatch.js
	findstr /m "KS=1" i3317_withsupp_instore.js

clean:
	-del *.js
	-del *.json
