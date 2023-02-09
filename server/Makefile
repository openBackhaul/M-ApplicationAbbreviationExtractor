IMAGE = aae-0.2
CONTAINER = M-ApplicationAbbreviationExtractor-0.2
PORT = 3008

# Build docker image
image:
	npm install
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
	docker run -d -p $(PORT):9091 --restart always --name $(CONTAINER) $(IMAGE)
