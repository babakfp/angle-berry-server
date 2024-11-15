FROM alpine:latest

ARG PB_VERSION=0.22.23

RUN apk add --no-cache \
    unzip \
    ca-certificates \
    wget

# Download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# Uncomment to copy the local pb_migrations dir into the image
# COPY ./pb_migrations /pb/pb_migrations

# Uncomment to copy the local pb_hooks dir into the image
# COPY ./pb_hooks /pb/pb_hooks

# Create the directory structure for the backup file
RUN mkdir -p /pb/pb_data/backups

# Download the backup file to the correct path
RUN wget -O /pb/pb_data/backups/pb_backup_angle_berry_0.zip https://github.com/babakfp/angle-berry-server/raw/refs/heads/docker_restore_backup_on_start/pb_data/backups/pb_backup_angle_berry_0.zip

# Unzip the backup
RUN unzip -o /pb/pb_data/backups/pb_backup_angle_berry_0.zip -d /pb/pb_data/

EXPOSE 8090

# Start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]
