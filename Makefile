compile:
	coffee --compile --output lib src

test:
	npm test

package:
	npm pack

.PHONY:	compile	test package
