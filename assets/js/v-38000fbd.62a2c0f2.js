"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[15684],{2424:(n,a,e)=>{e.r(a),e.d(a,{default:()=>z});var s=e(34086);const t=(0,s._)("p",null,"小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。",-1),o=(0,s.Uk)("整个小程序框架系统分为两部分: "),i=(0,s._)("strong",null,"逻辑层",-1),p=(0,s.Uk)(" (App Service) 和 "),l=(0,s._)("strong",null,"视图层",-1),c=(0,s.Uk)(" (../view)。小程序提供了自己的视图层描述语言 "),r=(0,s.Uk)("WXML"),u=(0,s.Uk)(" 和 "),d=(0,s.Uk)("WXSS"),m=(0,s.Uk)("，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。"),k={id:"响应的数据绑定",tabindex:"-1"},v=(0,s._)("a",{class:"header-anchor",href:"#响应的数据绑定","aria-hidden":"true"},"#",-1),g=(0,s.Uk)(" 响应的数据绑定 "),h=(0,s._)("p",null,"框架的核心是一个响应的数据绑定系统，可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。",-1),b={href:"https://developers.weixin.qq.com/s/l0gLEKmv6gZa",target:"_blank",rel:"noopener noreferrer"},w=(0,s.Uk)("在开发者工具中预览效果"),_=(0,s.uE)('<div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- This is our View --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> Hello {{name}}! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeName<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Click me! <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// This is our App Service.</span>\n<span class="token comment">// This is our data.</span>\n<span class="token keyword">const</span> helloData <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;WeChat&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Register a Page.</span>\n<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span> helloData<span class="token punctuation">,</span>\n  <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// sent data change to view</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;MINA&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>开发者通过框架将逻辑层数据中的 <code>name</code> 与视图层的 <code>name</code> 进行了绑定，所以在页面一打开的时候会显示 <code>Hello WeChat!</code>；</li><li>当点击按钮的时候，视图层会发送 <code>changeName</code> 的事件给逻辑层，逻辑层找到并执行对应的事件处理函数；</li><li>回调函数触发后，逻辑层执行 <code>setData</code> 的操作，将 <code>data</code> 中的 <code>name</code> 从 <code>WeChat</code> 变为 <code>MINA</code>，因为该数据和视图层已经绑定了，从而视图层会自动改变为 <code>Hello MINA!</code>。</li></ol><h2 id="页面管理" tabindex="-1"><a class="header-anchor" href="#页面管理" aria-hidden="true">#</a> 页面管理</h2>',4),f=(0,s._)("strong",null,"框架",-1),U=(0,s.Uk)(" 管理了整个小程序的页面路由，可以做到页面间的无缝切换，并给以页面完整的 "),y=(0,s.Uk)("生命周期"),W=(0,s.Uk)("。开发者需要做的只是将页面的数据、方法、生命周期函数注册到 "),x=(0,s._)("strong",null,"框架",-1),L=(0,s.Uk)(" 中，其他的一切复杂的操作都交由 "),A=(0,s._)("strong",null,"框架",-1),S=(0,s.Uk)(" 处理。"),P=(0,s._)("h2",{id:"基础组件",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#基础组件","aria-hidden":"true"},"#"),(0,s.Uk)(" 基础组件")],-1),R=(0,s._)("strong",null,"框架",-1),q=(0,s.Uk)(" 提供了一套基础的 "),C=(0,s.Uk)("组件"),M=(0,s.Uk)("，"),N=(0,s.Uk)("这些组件"),T=(0,s.Uk)(" 自带微信风格的样式以及特殊的逻辑，开发者可以通过组合基础组件，创建出强大的微信小程序 。"),I=(0,s._)("h2",{id:"丰富的-api",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#丰富的-api","aria-hidden":"true"},"#"),(0,s.Uk)(" 丰富的 API")],-1),H=(0,s._)("strong",null,"框架",-1),X=(0,s.Uk)(" 提供丰富的 "),D=(0,s.Uk)("微信原生 API"),Z=(0,s.Uk)("，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等。"),j={},z=(0,e(78732).Z)(j,[["render",function(n,a){const e=(0,s.up)("RouterLink"),j=(0,s.up)("Badge"),z=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)(s.HY,null,[t,(0,s._)("p",null,[o,(0,s.Wm)(e,{to:"/code/mini-app/guide/service/"},{default:(0,s.w5)((()=>[i])),_:1}),p,(0,s.Wm)(e,{to:"/code/mini-app/guide/view/"},{default:(0,s.w5)((()=>[l])),_:1}),c,(0,s.Wm)(e,{to:"/code/mini-app/guide/view/wxml.html"},{default:(0,s.w5)((()=>[r])),_:1}),u,(0,s.Wm)(e,{to:"/code/mini-app/guide/view/wxss.html"},{default:(0,s.w5)((()=>[d])),_:1}),m]),(0,s.kq)(" more "),(0,s._)("h2",k,[v,g,(0,s.Wm)(j,{text:"务必理解",type:"error"})]),h,(0,s._)("p",null,[(0,s._)("a",b,[w,(0,s.Wm)(z)])]),_,(0,s._)("p",null,[f,U,(0,s.Wm)(e,{to:"/code/mini-app/guide/service/lifetime.html"},{default:(0,s.w5)((()=>[y])),_:1}),W,x,L,A,S]),P,(0,s._)("p",null,[R,q,(0,s.Wm)(e,{to:"/code/mini-app/guide/view/component.html"},{default:(0,s.w5)((()=>[C])),_:1}),M,(0,s.Wm)(e,{to:"/code/mini-app/guide/view/component.html"},{default:(0,s.w5)((()=>[N])),_:1}),T]),I,(0,s._)("p",null,[H,X,(0,s.Wm)(e,{to:"/code/mini-app/guide/service/api/"},{default:(0,s.w5)((()=>[D])),_:1}),Z])],64)}]])},78732:(n,a)=>{a.Z=(n,a)=>{const e=n.__vccOpts||n;for(const[n,s]of a)e[n]=s;return e}},38894:(n,a,e)=>{e.r(a),e.d(a,{data:()=>s});const s={key:"v-38000fbd",path:"/code/mini-app/guide/frame/intro.html",title:"框架",lang:"zh-CN",frontmatter:{title:"框架",icon:"frame",category:["小程序"],summary:"小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。\n整个小程序框架系统分为两部分: 逻辑层 (App Service) 和 视图层 (../view)。小程序提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/mini-app/guide/frame/intro.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"框架"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-02-06T16:01:38.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2022-02-06T16:01:38.000Z"}]]},excerpt:'<p>小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。</p>\n<p>整个小程序框架系统分为两部分: <RouterLink to="/code/mini-app/guide/service/"><strong>逻辑层</strong></RouterLink> (App Service) 和 <RouterLink to="/code/mini-app/guide/view/"><strong>视图层</strong></RouterLink> (../view)。小程序提供了自己的视图层描述语言 <RouterLink to="/code/mini-app/guide/view/wxml.html">WXML</RouterLink> 和 <RouterLink to="/code/mini-app/guide/view/wxss.html">WXSS</RouterLink>，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。</p>\n',headers:[{level:2,title:"响应的数据绑定",slug:"响应的数据绑定",children:[]},{level:2,title:"页面管理",slug:"页面管理",children:[]},{level:2,title:"基础组件",slug:"基础组件",children:[]},{level:2,title:"丰富的 API",slug:"丰富的-api",children:[]}],git:{createdTime:1610439651e3,updatedTime:1644163298e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:4}]},readingTime:{minutes:2.13,words:638},filePathRelative:"code/mini-app/guide/frame/intro.md"}}}]);