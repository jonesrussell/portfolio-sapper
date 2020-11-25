FROM node:14-buster

LABEL name="Sapper"
LABEL version="1.0.0"

EXPOSE 3000

ARG INSTALL_ZSH="true"
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID
ARG NVM_DIR=/usr/local/share/nvm

# Docker Compose version
ARG COMPOSE_VERSION=1.24.0

ARG NODE_VERSION=v14.14.0

ENV DOCKER_HOST=unix:///var/run/user/1000/docker.sock

COPY library-scripts/*.sh /tmp/library-scripts/

# Install needed packages and setup non-root user. Use a separate RUN statement to add your own dependencies.
RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    # Install common packages, non-root user, update yarn and install nvm
    && bash /tmp/library-scripts/common-debian.sh "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" "${UPGRADE_PACKAGES}" \
    # Install nvm
    && rm -rf /opt/yarn-* /usr/local/bin/yarn /usr/local/bin/yarnpkg \
    && bash /tmp/library-scripts/node-debian.sh "${NVM_DIR}" "none" "${USERNAME}" \
    && bash /tmp/library-scripts/docker-debian.sh \
    # Clean up
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /root/.gnupg /tmp/library-scripts \
    #
    # Install Docker CE CLI
    # && apt-get install -y apt-transport-https ca-certificates curl gnupg-agent lsb-release \
    # && curl -fsSL https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/gpg | (OUT=$(apt-key add - 2>&1) || echo $OUT) \
    #
    # Install Docker Compose
    # && curl -sSL "https://github.com/docker/compose/releases/download/${COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
    # && chmod +x /usr/local/bin/docker-compose \
    #
    # Remove outdated yarn from /opt and install via package 
    # so it can be easily updated via apt-get upgrade yarn
    # && rm -rf /opt/yarn-* \
    # && rm -f /usr/local/bin/yarn \
    # && rm -f /usr/local/bin/yarnpkg \
    # && curl -sS https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/pubkey.gpg | apt-key add - 2>/dev/null \
    # && echo "deb https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    # && apt-get -y install --no-install-recommends yarn \
    #
    # Install tslint and typescript globally
    && npm install -g tslint eslint typescript \
    #
    # [Optional] Update a non-root user to UID/GID if needed.
    && if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ]; then \
    groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /home/$USERNAME; \
    fi \
    # [Optional] Add add sudo support for non-root user
    && echo node ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    #
    # Clean up
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

CMD ["sleep", "infinity"]
