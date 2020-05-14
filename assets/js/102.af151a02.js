(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{447:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"android-x86-in-virtualbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-x86-in-virtualbox"}},[t._v("#")]),t._v(" Android-x86 in VirtualBox")]),t._v(" "),a("p",[t._v("The idea of this section is to cover how to install and use the VirtualBox with Android-x86 for debugging purposes. This is a difficult task because there are differences between versions. For the moment I´m going to cover 6.0 which is the one that I had to work with and then we'll have to find similarities.")]),t._v(" "),a("p",[t._v("It doesn't cover VirtualBox or a Linux in detail but it shows the commands I've used to make it work.")]),t._v(" "),a("h2",{attrs:{id:"virtual-machine-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-machine-setup"}},[t._v("#")]),t._v(" Virtual Machine setup")]),t._v(" "),a("p",[t._v("These are my VirtualBox settings:")]),t._v(" "),a("ul",[a("li",[t._v("OS Type: Linux 2.6 (I've user 64bit because my computer can support it)")]),t._v(" "),a("li",[t._v("Virtual hard drive size: 4Gb")]),t._v(" "),a("li",[t._v("Ram Memory: 2048")]),t._v(" "),a("li",[t._v("Video Memory: 8M")]),t._v(" "),a("li",[t._v("Sound device: Sound Blaster 16.\n")]),a("li",[t._v("Network device: PCnet-Fast III, attached to NAT. You can also use\nbridged adapter, but you need a DHCP server in your environment.")])]),t._v(" "),a("p",[t._v("The image used with this configuration has been android-x86_64-6.0-r3.iso (it is 64bit) downloaded from "),a("a",{attrs:{href:"http://www.android-x86.org/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.android-x86.org/download"),a("OutboundLink")],1),t._v(". I suppose that it also works with 32bit version.")]),t._v(" "),a("h2",{attrs:{id:"virtual-hard-drive-setup-for-sdcard-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-hard-drive-setup-for-sdcard-support"}},[t._v("#")]),t._v(" Virtual hard drive Setup for SDCARD Support")]),t._v(" "),a("p",[t._v("With the virtual hard drive just created, boot the virtual machine with the android-x86 image in the optical drive.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/1zEQG.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/1zEQG.jpg",alt:"Storage options with the android image as an optical drive"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Once you boot, you can see the grub menu of the Live CD")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/GkjJr.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/GkjJr.jpg",alt:"Live CD grub menu options"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Choose the Debug Mode Option, then you should see the shell prompt. This is a busybox shell. You can get more shell by switching between virtual console Alt-F1/F2/F3.")]),t._v(" "),a("p",[t._v("Create two partitions by fdisk (some other versions would use cfdisk). Format them to ext3. Then reboot:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("# fdisk "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sda\n\n")])])]),a("p",[t._v("Then type:")]),t._v(" "),a("p",[t._v('"n" (new partition)')]),t._v(" "),a("p",[t._v('"p" (primary partition)')]),t._v(" "),a("p",[t._v('"1" (1st partition)')]),t._v(" "),a("p",[t._v('"1" (first cylinder)')]),t._v(" "),a("p",[t._v('"261" (choose a cylinder, we\'ll leave 50% of the disk for a 2nd partition)')]),t._v(" "),a("p",[t._v('"2" (2nd partition)')]),t._v(" "),a("p",[t._v('"262" (262nd cylinder)')]),t._v(" "),a("p",[t._v('"522" (choose the last cylinder)')]),t._v(" "),a("p",[t._v('"w" (write the partition)')]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("#mdev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s\n#mke2fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("L")]),t._v(" DATA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sda1\n#mke2fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("L")]),t._v(" SDCARD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sda2\n#reboot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("f\n\n")])])]),a("p",[t._v("When you restart the virtual machine and the grub menu appears and you will be able edit the kernel boot line so you can add "),a("code",[t._v("DATA=sda1 SDCARD=sda2")]),t._v(" options to point to the sdcard or the data partition.")]),t._v(" "),a("h2",{attrs:{id:"installation-in-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-in-partition"}},[t._v("#")]),t._v(" Installation in partition")]),t._v(" "),a("p",[t._v("With the virtual hard drive just created, boot the virtual machine with the android-x86 image as the optical drive.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/iJWKw.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/iJWKw.jpg",alt:"Live CD boot options"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v('In the booting options of the Live CD choose "Installation - Install Android to hard disk"')]),t._v(" "),a("p",[t._v("Choose the sda1 partition and install android and we'll install grub.")]),t._v(" "),a("p",[t._v("Reboot the virtual machine but make sure that the image is not in the optical drive so it can restart from the virtual hard drive.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/5wwcV.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/5wwcV.jpg",alt:"make sure that the image is not in the optical drive"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v('In the grub menu we need to edit kernel like in the "Android-x86 6.0-r3" option so press e.')]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/GxJZl.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/GxJZl.jpg",alt:"the kernel line before it's edited"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v('Then we substitute "quiet" with "vga=ask" and add the option "SDCARD=sda2"')]),t._v(" "),a("p",[t._v("In my case, the kernel line looks like this after modified:")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("kenel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("kernel vga"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ask root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ram0 SRC"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("android"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r3 SDCARD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sda2\n\n")])])]),a("p",[t._v("Press b to boot, then you'll be able to choose the screen size pressing ENTER (the "),a("code",[t._v("vga=ask")]),t._v(" option)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/oU5IV.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/oU5IV.jpg",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Once the installation wizard has started choose the language. I could choose English (United States) and Spanish (United States) and I had trouble choosing any other.")])])}),[],!1,null,null,null);e.default=s.exports}}]);