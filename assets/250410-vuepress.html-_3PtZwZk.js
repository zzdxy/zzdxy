import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as d,c as i,d as a,e as r}from"./app-TNlY5Ty6.js";const t={},c=r(`<h1 id="vuepress项目命令" tabindex="-1"><a class="header-anchor" href="#vuepress项目命令" aria-hidden="true">#</a> vuepress项目命令</h1><div class="hint-container info"><p class="hint-container-title">共勉</p><p>不要哀求，学会争取。若是如此，终有所获。</p></div><p>其本教程介绍 VuePress 项目命令。</p><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><p><code>vuepress dev &lt;dir&gt; 会启动一个开发服务器，以便让你在本地开发你的 VuePress 站点。</code><code>vuepress build &lt;dir&gt; 会将你的 VuePress 站点构建成静态文件，以便你进行后续部署。</code> 使用模板</p><p>如果你在使用 VuePress Theme Hope 模板，你可以在 package.json 中发现下列三个命令:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;docs:build&quot;: &quot;vuepress build src&quot;,
    &quot;docs:clean-dev&quot;: &quot;vuepress dev src --clean-cache --clean-temp&quot;,
    &quot;docs:dev&quot;: &quot;vuepress dev src&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着你可以使用:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpmyarnnpm
npm run docs:dev 启动开发服务器
npm run docs:build 构建项目并输出
npm run docs:clean-dev 清除缓存并启动开发服务器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::终止开发服务器</p><p>如果你需要终止开发服务器，请点击终端，并连续两次按下 Ctrl + C。 :::</p><p>升级版本 如果你需要升级主题和 VuePress 版本，请执行以下命令:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpmyarnnpm

npx vp-update
更新日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function l(u,o){const e=n("Share");return d(),i("div",null,[c,a(e,{colorful:""})])}const m=s(t,[["render",l],["__file","250410-vuepress.html.vue"]]);export{m as default};
