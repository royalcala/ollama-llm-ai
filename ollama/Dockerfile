FROM ollama/ollama:latest

# Expose the correct Ollama API port
EXPOSE 11434

# Start the ollama service directly
# The base image already has a correct ENTRYPOINT that runs ollama
# We don't need to pull models since the API can handle that dynamically
CMD ["serve"]

