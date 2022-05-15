"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[78936],{66698:(n,a,s)=>{s.r(a),s.d(a,{default:()=>l});var t=s(34086);const e=(0,t._)("p",null,[(0,t.Uk)("微信现已开放小程序内搜索，开发者可以通过 "),(0,t._)("code",null,"sitemap.json"),(0,t.Uk)(" 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 "),(0,t._)("code",null,"user-agent: mpcrawler"),(0,t.Uk)(" 及场景值: "),(0,t._)("code",null,"1129"),(0,t.Uk)("。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。")],-1),o=(0,t._)("p",null,[(0,t.Uk)("小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 "),(0,t._)("code",null,"sitemap.json"),(0,t.Uk)(" ，则默认为所有页面都允许被索引。")],-1),p=(0,t.uE)('<h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>描述</th></tr></thead><tbody><tr><td>rules</td><td>Object[]</td><td>是</td><td>索引规则列表</td></tr></tbody></table><h3 id="rules" tabindex="-1"><a class="header-anchor" href="#rules" aria-hidden="true">#</a> rules</h3><p>rules 配置项指定了索引规则，每项规则为一个 JSON 对象，属性如下所示:</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>默认值</th><th>取值</th><th>取值说明</th></tr></thead><tbody><tr><td>action</td><td>string</td><td>否</td><td>&quot;allow&quot;</td><td>&quot;allow&quot;、&quot;disallow&quot;</td><td>命中该规则的页面是否能被索引</td></tr><tr><td>page</td><td>string</td><td>是</td><td></td><td>&quot;*&quot;、页面的路径</td><td>* 表示所有页面，不能作为通配符使用</td></tr><tr><td>params</td><td>string[]</td><td>否</td><td>[]</td><td></td><td>当 page 字段指定的页面在被本规则匹配时可能使用的页面参数名称的列表(不含参数值)</td></tr><tr><td>matching</td><td>string</td><td>否</td><td>&quot;inclusive&quot;</td><td>参考 matching 取值说明</td><td>当 page 字段指定的页面在被本规则匹配时，此参数说明 params 匹配方式</td></tr><tr><td>priority</td><td>Number</td><td>否</td><td></td><td></td><td>优先级，值越大则规则越早被匹配，否则默认从上到下匹配</td></tr></tbody></table><h3 id="matching-取值说明" tabindex="-1"><a class="header-anchor" href="#matching-取值说明" aria-hidden="true">#</a> matching 取值说明</h3><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>exact</td><td>当小程序页面的参数列表等于 params 时，规则命中</td></tr><tr><td>inclusive</td><td>当小程序页面的参数列表包含 params 时，规则命中</td></tr><tr><td>exclusive</td><td>当小程序页面的参数列表与 params 交集为空时，规则命中</td></tr><tr><td>partial</td><td>当小程序页面的参数列表与 params 交集不为空时，规则命中</td></tr></tbody></table><h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例" aria-hidden="true">#</a> 配置示例</h3><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例 1</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;allow&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/page&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;matching&quot;</span><span class="token operator">:</span> <span class="token string">&quot;exact&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;disallow&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/page&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>path/to/page?a=1&amp;b=2</code> =&gt; 优先索引</li><li><code>path/to/page</code> =&gt; 不被索引</li><li><code>path/to/page?a=1</code> =&gt; 不被索引</li><li><code>path/to/page?a=1&amp;b=2&amp;c=3</code> =&gt; 不被索引</li><li>其他页面都会被索引</li></ul><h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例 2</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;allow&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/page&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;matching&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inclusive&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;disallow&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/page&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>path/to/page?a=1&amp;b=2</code> =&gt; 优先索引</li><li><code>path/to/page?a=1&amp;b=2&amp;c=3</code> =&gt; 优先索引</li><li><code>path/to/page</code> =&gt; 不被索引</li><li><code>path/to/page?a=1</code> =&gt; 不被索引</li><li>其他页面都会被索引</li></ul><h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例 3</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;allow&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/page&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;matching&quot;</span><span class="token operator">:</span> <span class="token string">&quot;exclusive&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;disallow&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/page&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>path/to/pag</code>e =&gt; 优先索引</li><li><code>path/to/page?c=3</code> =&gt; 优先索引</li><li><code>path/to/page?a=1</code> =&gt; 不被索引</li><li><code>path/to/page?a=1&amp;b=2</code> =&gt; 不被索引</li><li>其他页面都会被索引</li></ul><h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4" aria-hidden="true">#</a> 示例 4</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;allow&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/page&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;matching&quot;</span><span class="token operator">:</span> <span class="token string">&quot;partial&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;disallow&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/page&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>path/to/page?a=1</code> =&gt; 优先索引</li><li><code>path/to/page?a=1&amp;b=2</code> =&gt; 优先索引</li><li><code>path/to/page</code> =&gt; 不被索引</li><li><code>path/to/page?c=3</code> =&gt; 不被索引</li><li>其他页面都会被索引</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>没有 sitemap.json 则默认所有页面都能被索引</p><p><code>{&quot;action&quot;: &quot;allow&quot;, &quot;page&quot;: &quot;*&quot;}</code> 是优先级最低的默认规则，未显式指明 <code>&quot;disallow&quot;</code> 的都默认被索引</p></div>',21),i={},l=(0,s(78732).Z)(i,[["render",function(n,a){return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,o,(0,t.kq)(" more "),p],64)}]])},78732:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}},68534:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-0c5df440",path:"/code/mini-app/guide/config/sitemap-config.html",title:"小程序内索引",lang:"zh-CN",frontmatter:{title:"小程序内索引",icon:"search",category:["小程序"],summary:"微信现已开放小程序内搜索，开发者可以通过 sitemap.json 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 user-agent: mpcrawler 及场景值: 1129。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。\n小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 sitemap.json ，则默认为所有页面都允许被索引。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/config/sitemap-config.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"小程序内索引"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2021-01-20T11:45:00.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2021-01-20T11:45:00.000Z"}]]},excerpt:"<p>微信现已开放小程序内搜索，开发者可以通过 <code v-pre>sitemap.json</code> 配置，或者管理后台页面收录开关来配置其小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中。爬虫访问小程序内页面时，会携带特定的 <code v-pre>user-agent: mpcrawler</code> 及场景值: <code v-pre>1129</code>。需要注意的是，若小程序爬虫发现的页面数据和真实用户的呈现不一致，那么该页面将不会进入索引中。</p>\n<p>小程序根目录下的 sitemap.json 文件用于配置小程序及其页面是否允许被微信索引，文件内容为一个 JSON 对象，如果没有 <code v-pre>sitemap.json</code> ，则默认为所有页面都允许被索引。</p>\n",headers:[{level:2,title:"配置项",slug:"配置项",children:[{level:3,title:"rules",slug:"rules",children:[]},{level:3,title:"matching 取值说明",slug:"matching-取值说明",children:[]},{level:3,title:"配置示例",slug:"配置示例",children:[]}]}],git:{createdTime:1604856934e3,updatedTime:16111431e5,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:2}]},readingTime:{minutes:3,words:899},filePathRelative:"code/mini-app/guide/config/sitemap-config.md"}}}]);