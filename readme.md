# Brightness Display DDC



## Requered install kernel module

1. `sudo modprobe i2c-dev`
2. `sudo vim /etc/modules-load.d/i2c-dev.conf`
```shell
KERNEL=="i2c-[0-9]*", GROUP="ddc", MODE="0660", PROGRAM="/usr/bin/ddcutil --bus=%n getvcp 0x10"
```
3. `sudo vim /etc/udev/rules.d/45-ddcutil-i2c.rules`
```shell
groupadd ddc
usermod -aG ddc $USER
```
4. `sudo udevadm trigger`
5. `sudo groupadd ddc`
6. `sudo usermod -aG ddc $USER`
