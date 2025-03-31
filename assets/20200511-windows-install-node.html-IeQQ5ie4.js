import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as d,a as e,b as a,d as c,e as n}from"./app-nKMPWVUx.js";const r="/zzdxy/assets/format_png-20240216201245587-8085565-YCdGITmV.png",l="/zzdxy/assets/format_png-20240216201245567-Hw9KTTCb.png",p="/zzdxy/assets/format_png-20240216201245567-Hw9KTTCb.png",g="/zzdxy/assets/format_png-20240216201245536-EJcHfRK5.png",m="/zzdxy/assets/format_png-20240216201245565-4jEkUi8M.png",f="/zzdxy/assets/format_png-20240216201245564-EvGJyO7O.png",u="data:image/png;base64,",h="/zzdxy/assets/format_png-20240216201245590-HhNHZ9M2.png",b="/zzdxy/assets/format_png-20240216201245677-c7kk-VfG.png",_="/zzdxy/assets/90614e36232264ba33de238ec0173007-iJCHCzj0.png",x={},v=n('<h1 id="windows-安装-node-js-图文教程" tabindex="-1"><a class="header-anchor" href="#windows-安装-node-js-图文教程" aria-hidden="true">#</a> Windows 安装 Node.js 图文教程</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>本教程所有操作基于<code>Window 10</code>操作系统 + <code>Node.js v12.16.1-x64</code>，原则上适用于所有<code>Windows</code>操作系统，细节不同请根据自己需要自行判断。</p><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>',4),z=e("code",null,"Node.js",-1),y={href:"https://nodejs.org/zh-cn/download/",target:"_blank",rel:"noopener noreferrer"},k=n('<figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><ol><li><p>双击下载好的安装包；</p><figure><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2N1bnl1MTk0My9pbWFnZS1ob3N0aW5nLWZvci1ibG9nL2ltZ3NXaW4yMDIwMDQwODIxMDc0MC5wbmc?x-oss-process=image/format,png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>直接下一步；</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>勾选同意相关使用协议，同时下一步；</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>修改成你要安装的路径（默认也可以），然后下一步；</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>建议不作修改，直接下一步，当然你也可以对里边所需服务进行勾选；</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>所需工具自己需要就勾选，不需要就直接下一步；</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>直接安装，开始安装；</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>完成安装后，点击 Finish 完成安装；</p><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h2><p>安装后，我们怎样知道自己是否安装成功呢？可以使用如下命令查看，若成功则会返回下图类似结果；</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h2><p>默认情况下，我们利用 <code>npm</code> 包管理器用来安装依赖包时，包会默认存放在 <code>C:\\Users\\用户名\\AppData\\Roaming\\npm\\node_modules</code> 目录下，如果你不确定你的包存放路径在哪儿，那么可以通过如下命令来进行查看：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> root <span class="token parameter variable">-g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但这样就存在一个问题，如果我们的依赖包很多的情况下，就会占用我们系统盘大量的空间，这时候我们如果不想让全局包放在这里，那么就可以自定义存放目录。修改的方式也很简单，只需要在控制台中执行如下两条命令即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">&quot;D:<span class="token entity" title="\\n">\\n</span>ode<span class="token entity" title="\\n">\\n</span>ode_global&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">&quot;D:<span class="token entity" title="\\n">\\n</span>ode<span class="token entity" title="\\n">\\n</span>ode_cache&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然，我们也可以打开配置文件 <code>.npmrc</code>，然后修改如下两条记录：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>prefix = D:\\node\\node_global
cache = D:\\node\\node_cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过上述操作，我们就可以成功安装<code>Node.js</code>，接下来我们就可以使用 <code>npm</code> 等工具了，是不是很简单呢！</p>',18);function w(N,j){const i=t("ExternalLinkIcon");return o(),d("div",null,[v,e("p",null,[a("要安装"),z,a("，首先需要去下载对应系统安装包，"),e("a",y,[a("下载地址"),c(i)]),a("；")]),k])}const W=s(x,[["render",w],["__file","20200511-windows-install-node.html.vue"]]);export{W as default};
