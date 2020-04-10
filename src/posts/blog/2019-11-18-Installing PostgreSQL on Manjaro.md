---
published: true
---

I wanted to write this post to quickly go over the installation steps for getting PostgreSQL installed on a Manjaro installation.

### Pre-requisites
1. Manjaro Linux
2. `yay` is installed

### Installing PostgreSQL
1. Update packages

    ```bash
    yay -Syyu
    ```

2. Install `postgresql` package

    ```bash
    yay postgresql
    ```

3. Enter interactive mode for PostgreSQL

    ```bash
    sudo -iu postgres
    ```

4. Create a database cluster

    ```bash
    initdb --locale=en_US.UTF-8 -E UTF8 -D /var/lib/postgres/data
    ```

5. Start `postgresql.service`

    ```bash
    sudo systemctl enable --now postgresql.service
    ```

### Installing pgAdmin4
