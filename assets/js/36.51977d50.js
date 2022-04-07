(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{517:function(e,s,r){"use strict";r.r(s);var a=r(21),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),r("h2",{attrs:{id:"服务器要求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务器要求"}},[e._v("#")]),e._v(" 服务器要求")]),e._v(" "),r("p",[e._v("Hyperf 对系统环境有一些要求，当您使用 Swoole 网络引擎驱动时，仅可运行于 Linux 和 Mac 环境下，但由于 Docker 虚拟化技术的发展，在 Windows 下也可以通过 Docker for Windows 来作为运行环境，通常来说 Mac 环境下，我们更推荐本地环境部署，以避免 Docker 共享磁盘缓慢导致 Hyperf 启动速度慢的问题。当您使用 Swow 网络引擎驱动时，则可在 Windows、Linux、Mac 下运行。")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/hyperf/hyperf-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("hyperf/hyperf-docker"),r("OutboundLink")],1),e._v(" 项目内已经为您准备好了各种版本的 Dockerfile ，或直接基于已经构建好的 "),r("a",{attrs:{href:"https://hub.docker.com/r/hyperf/hyperf",target:"_blank",rel:"noopener noreferrer"}},[e._v("hyperf/hyperf"),r("OutboundLink")],1),e._v(" 镜像来运行。")]),e._v(" "),r("p",[e._v("当您不想采用 Docker 来作为运行的环境基础时，您需要确保您的运行环境达到了以下的要求：")]),e._v(" "),r("ul",[r("li",[e._v("PHP >= 7.4")]),e._v(" "),r("li",[e._v("以下任一网络引擎\n"),r("ul",[r("li",[e._v("Swoole PHP 扩展 >= 4.5，并关闭了 "),r("code",[e._v("Short Name")])]),e._v(" "),r("li",[e._v("Swow PHP 扩展 (Beta)")])])]),e._v(" "),r("li",[e._v("JSON PHP 扩展")]),e._v(" "),r("li",[e._v("Pcntl PHP 扩展")]),e._v(" "),r("li",[e._v("OpenSSL PHP 扩展（如需要使用到 HTTPS）")]),e._v(" "),r("li",[e._v("PDO PHP 扩展 （如需要使用到 MySQL 客户端）")]),e._v(" "),r("li",[e._v("Redis PHP 扩展 （如需要使用到 Redis 客户端）")]),e._v(" "),r("li",[e._v("Protobuf PHP 扩展 （如需要使用到 gRPC 服务端或客户端）")])]),e._v(" "),r("h2",{attrs:{id:"安装-hyperf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-hyperf"}},[e._v("#")]),e._v(" 安装 Hyperf")]),e._v(" "),r("p",[e._v("Hyperf 使用 "),r("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),r("OutboundLink")],1),e._v(" 来管理项目的依赖，在使用 Hyperf 之前，请确保你的运行环境已经安装好了 Composer。")]),e._v(" "),r("blockquote",[r("p",[e._v("安装过程中，对于自己不清楚的选项，请直接使用回车处理，避免因自动添加了部分监听器，但又没有正确配置时，导致服务无法启动的问题。")])]),e._v(" "),r("h3",{attrs:{id:"通过-composer-创建项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通过-composer-创建项目"}},[e._v("#")]),e._v(" 通过 "),r("code",[e._v("Composer")]),e._v(" 创建项目")]),e._v(" "),r("p",[e._v("我们已经为您准备好的一个骨架项目，内置了一些常用的组件及相关配置的文件及结构，是一个可以快速用于业务开发的 Web 项目基础，在安装时，您可根据您自身的需求，对组件依赖进行选择。"),r("br"),e._v("\n执行下面的命令可以于当前所在位置创建一个 skeleton 项目")]),e._v(" "),r("p",[e._v("基于 Swoole 驱动：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("composer create-project hyperf/hyperf-skeleton \n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("基于 Swow 驱动：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("composer create-project hyperf/swow-skeleton \n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:"docker-下开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-下开发"}},[e._v("#")]),e._v(" Docker 下开发")]),e._v(" "),r("p",[e._v("假设您的本机环境并不能达到 Hyperf 的环境要求，或对于环境配置不是那么熟悉，那么您可以通过以下方法来运行及开发 Hyperf 项目：")]),e._v(" "),r("ul",[r("li",[e._v("启动镜像")])]),e._v(" "),r("p",[e._v("可以根据实际情况，映射到宿主机对应的目录，以下以 "),r("code",[e._v("/workspace/skeleton")]),e._v(" 为例")]),e._v(" "),r("blockquote",[r("p",[e._v("如果 docker 启动时开启了 selinux-enabled 选项，容器内访问宿主机资源就会受限，所以启动容器时可以增加 --privileged -u root 选项")])]),e._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run --name hyperf "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-v /workspace/skeleton:/data/project "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-p "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("9501")]),e._v(":9501 -it "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--privileged -u root "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--entrypoint /bin/sh "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\nhyperf/hyperf:7.4-alpine-v3.11-swoole\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br")])]),r("ul",[r("li",[e._v("将 Composer 镜像设置为阿里云镜像，加速国内下载速度")])]),e._v(" "),r("blockquote",[r("p",[e._v("视情况而定")])]),e._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" config -g repo.packagist "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" https://mirrors.aliyun.com/composer\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ul",[r("li",[e._v("创建项目")])]),e._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /data/project\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" create-project hyperf/hyperf-skeleton\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("ul",[r("li",[e._v("启动项目")])]),e._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" hyperf-skeleton\nphp bin/hyperf.php start\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("接下来，就可以在宿主机 "),r("code",[e._v("/workspace/skeleton/hyperf-skeleton")]),e._v(" 中看到您安装好的代码了。\n由于 Hyperf 是持久化的 CLI 框架，当您修改完您的代码后，通过 "),r("code",[e._v("CTRL + C")]),e._v(" 终止当前启动的进程实例，并重新执行 "),r("code",[e._v("php bin/hyperf.php start")]),e._v(" 启动命令即可。")]),e._v(" "),r("h2",{attrs:{id:"存在兼容性问题的扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#存在兼容性问题的扩展"}},[e._v("#")]),e._v(" 存在兼容性问题的扩展")]),e._v(" "),r("p",[e._v("由于 Hyperf 基于 Swoole 协程实现，而 Swoole 4 带来的协程功能是 PHP 前所未有的，所以与不少扩展都仍存在兼容性的问题。"),r("br"),e._v("\n以下扩展（包括但不限于）都会造成一定的兼容性问题，不能与之共用或共存：")]),e._v(" "),r("ul",[r("li",[e._v("xhprof")]),e._v(" "),r("li",[e._v("xdebug")]),e._v(" "),r("li",[e._v("blackfire")]),e._v(" "),r("li",[e._v("trace")]),e._v(" "),r("li",[e._v("uopz")])]),e._v(" "),r("ClientOnly",[r("CallInArticleAdsense")],1)],1)}),[],!1,null,null,null);s.default=t.exports}}]);