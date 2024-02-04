#!/bin/sh
# validate_env_vars.sh

# This script checks if all the required environment variables are set.

required_vars="NODE_ENV DOCKER_BUILD AUTH_SECRET NEXT_PUBLIC_NODE_ENV"

# Check each variable
for var in $required_vars; do
    if [ -z "$(eval echo \$$var)" ]; then
        echo "Error: Environment variable $var is not set."
        exit 1
    fi
done

echo "All required environment variables are set."
