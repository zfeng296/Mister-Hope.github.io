"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[86541],{60386:(a,n,s)=>{s.r(n),s.d(n,{default:()=>l});var t=s(34086);const e=(0,t._)("p",null,"WXML 提供模板 (template)，可以在模板中定义代码片段，然后在不同的地方调用。",-1),p=(0,t.uE)('<h2 id="定义模板" tabindex="-1"><a class="header-anchor" href="#定义模板" aria-hidden="true">#</a> 定义模板</h2><p>使用 <code>name</code> 属性，作为模板的名字。然后在 <code>&lt;template /&gt;</code> 内定义代码片段，如:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--\n  index: int\n  msg: string\n  time: string\n--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msgItem<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span> {{index}}: {{msg}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span> Time: {{time}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用模板" tabindex="-1"><a class="header-anchor" href="#使用模板" aria-hidden="true">#</a> 使用模板</h2><p>使用 <code>is</code> 属性，声明需要的使用的模板，然后将模板所需要的 <code>data</code> 传入，如:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msgItem<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{...item}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;this is a template&quot;</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&quot;2016-09-15&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>is</code> 属性可以使用 Mustache 语法，来动态决定具体需要渲染哪个模板:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template name<span class="token operator">=</span><span class="token string">&quot;odd&quot;</span><span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>view<span class="token operator">&gt;</span> odd <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>template name<span class="token operator">=</span><span class="token string">&quot;even&quot;</span><span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>view<span class="token operator">&gt;</span> even <span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>\n\n<span class="token operator">&lt;</span>block wx<span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;{{[1, 2, 3, 4, 5]}}&quot;</span><span class="token operator">&gt;</span>\n  <span class="token operator">&lt;</span>template is<span class="token operator">=</span><span class="token string">&quot;{{item % 2 == 0 ? &#39;even&#39; : &#39;odd&#39;}}&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>block<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板的作用域" tabindex="-1"><a class="header-anchor" href="#模板的作用域" aria-hidden="true">#</a> 模板的作用域</h2><p>模板拥有自己的作用域，只能使用 <code>data</code> 传入的数据以及模板定义文件中定义的 <code>&lt;wxs /&gt;</code> 模块。</p><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><p>WXML 提供两种文件引用方式 <code>import</code> 和 <code>include</code>。</p><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h3><p><code>import</code> 可以在该文件中使用目标文件定义的 template，如:</p><p>在 <code>item.wxml</code> 中定义了一个叫 item 的 template:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- item.wxml --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span>{{text}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>index.wxml</code> 中引用了 <code>item.wxml</code>，就可以使用 item 模板:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.wxml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{text: <span class="token punctuation">&#39;</span>forbar<span class="token punctuation">&#39;</span>}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import-的作用域" tabindex="-1"><a class="header-anchor" href="#import-的作用域" aria-hidden="true">#</a> import 的作用域</h3><p><code>import</code> 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件 import 的 template。</p><p>如: C import B，B import A，在 C 中可以使用 B 定义的 template，在 B 中可以使用 A 定义的 template，但是 C 不能使用 A 定义的 template。</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- A.wxml --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>A<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span> A template <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- B.wxml --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a.wxml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>B<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">&gt;</span></span> B template <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- C.wxml --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>import</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b.wxml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>A<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>  <span class="token comment">&lt;!-- Error! Can not use tempalte when not import A. --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>B<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h3><p><code>include</code> 可以将目标文件除了 <code>&lt;template /&gt;</code> <code>&lt;wxs /&gt;</code> 外的整个代码引入，相当于是拷贝到 <code>include</code> 位置，如:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- index.wxml --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header.wxml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> body <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer.wxml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token comment">&lt;!-- header.wxml --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> header <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- footer.wxml --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> footer <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',26),o={},l=(0,s(78732).Z)(o,[["render",function(a,n){return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t.kq)(" more "),p],64)}]])},78732:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}},96884:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-19ff4723",path:"/code/mini-app/guide/view/template.html",title:"模板",lang:"zh-CN",frontmatter:{title:"模板",icon:"template",category:["小程序"],summary:"WXML 提供模板 (template)，可以在模板中定义代码片段，然后在不同的地方调用。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/view/template.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"模板"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2020-11-08T17:35:34.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2020-11-08T17:35:34.000Z"}]]},excerpt:"<p>WXML 提供模板 (template)，可以在模板中定义代码片段，然后在不同的地方调用。</p>\n",headers:[{level:2,title:"定义模板",slug:"定义模板",children:[]},{level:2,title:"使用模板",slug:"使用模板",children:[]},{level:2,title:"模板的作用域",slug:"模板的作用域",children:[]},{level:2,title:"引用",slug:"引用",children:[{level:3,title:"import",slug:"import",children:[]},{level:3,title:"import 的作用域",slug:"import-的作用域",children:[]},{level:3,title:"include",slug:"include",children:[]}]}],git:{createdTime:1604856934e3,updatedTime:1604856934e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:1.62,words:486},filePathRelative:"code/mini-app/guide/view/template.md"}}}]);