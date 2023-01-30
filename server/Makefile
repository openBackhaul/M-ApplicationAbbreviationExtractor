IMAGE = aae-0.2
CONTAINER = M-ApplicationAbbreviationExtractor-0.2

# Build docker image
build:
	docker build -t $(IMAGE) .

# Stop docker container
stop:
	docker stop $(CONTAINER)

# Remove docker container
rm:
	docker rm -f $(CONTAINER)

# Remove docker container and image
clean: rm
	docker rmi $(IMAGE)

# Run docker container
run: rm
	docker run -d -p 3008:9091 --name $(CONTAINER) $(IMAGE)
