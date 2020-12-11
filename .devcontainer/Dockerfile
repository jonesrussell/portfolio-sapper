FROM node:14-buster

LABEL name="Sapper"
LABEL version="1.0.1"

ARG INSTALL_ZSH="true"
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID
ARG UPGRADE_PACKAGES="true"
ARG INSTALL_OH_MYS="true"
ARG NVM_DIR=/usr/local/share/nvm
ARG ENABLE_NONROOT_DOCKER="true"
ARG SOURCE_SOCKET=/var/run/docker-host.sock
ARG TARGET_SOCKET=/var/run/docker.sock
ARG NODE_VERSION=v14.15.0
ARG UPDATE_RC="true"
# Docker Compose version
ARG COMPOSE_VERSION=1.24.0

# ENV DOCKER_HOST=unix:///var/run/docker.sock

COPY library-scripts/*.sh /tmp/library-scripts/

# Install needed packages and setup non-root user. Use a separate RUN statement to add your own dependencies.
RUN export DEBIAN_FRONTEND=noninteractive \
    # Install common packages, non-root user, update yarn and install nvm
    && bash /tmp/library-scripts/common-debian.sh "${INSTALL_ZSH}" "${USERNAME}" "${USER_UID}" "${USER_GID}" "${UPGRADE_PACKAGES}" "${INSTALL_OH_MYS}" \
    # Install nvm
    && rm -rf /opt/yarn-* /usr/local/bin/yarn /usr/local/bin/yarnpkg \
    && bash /tmp/library-scripts/node-debian.sh "${NVM_DIR}" "${NODE_VERSION}" "${USERNAME}" "${UPDATE_RC}" \
    && bash /tmp/library-scripts/docker-debian.sh "${ENABLE_NONROOT_DOCKER}" "${SOURCE_SOCKET}" "${TARGET_SOCKET}" "${USERNAME}" \
    # Clean up
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /root/.gnupg /tmp/library-scripts \
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

USER node
RUN mkdir /home/node/.kube
USER root

EXPOSE 4000

ENTRYPOINT ["/usr/local/share/docker-init.sh"]

CMD ["sleep", "infinity"]
