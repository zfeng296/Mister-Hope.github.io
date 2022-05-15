"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[96746],{18051:(n,s,a)=>{a.r(s),a.d(s,{default:()=>w});var e=a(34086);const t=(0,e._)("p",null,"在 TypeScript 中，我们使用接口(Interfaces)来定义对象的类型。",-1),p=(0,e._)("h2",{id:"什么是接口",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#什么是接口","aria-hidden":"true"},"#"),(0,e.Uk)(" 什么是接口")],-1),o=(0,e._)("p",null,"在面向对象语言中，接口(Interfaces)是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类(classes)去实现(implement)。",-1),i=(0,e.Uk)("TypeScript 中的接口是一个非常灵活的概念，除了可用于"),l=(0,e.Uk)("对类的一部分行为进行抽象"),c=(0,e.Uk)("以外，也常用于对「对象的形状(Shape)」进行描述。"),r=(0,e.uE)('<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子" aria-hidden="true">#</a> 简单的例子</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，我们定义了一个接口 <code>Person</code>，接着定义了一个变量 <code>tom</code>，它的类型是 <code>Person</code>。这样，我们就约束了 <code>tom</code> 的形状必须和接口 <code>Person</code> 一致。</p>',3),u=(0,e.Uk)("接口一般首字母大写。"),d={href:"https://msdn.microsoft.com/en-us/library/8bc1fexb%28v=vs.71%29.aspx",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("有的编程语言中会建议接口的名称加上 "),m=(0,e._)("code",null,"I",-1),v=(0,e.Uk)(" 前缀"),b=(0,e.Uk)("。"),g=(0,e.uE)('<p>定义的变量比接口少了一些属性是不允许的:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(6,5): error TS2322: Type &#39;{ name: string; }&#39; is not assignable to type &#39;Person&#39;.</span>\n<span class="token comment">//   Property &#39;age&#39; is missing in type &#39;{ name: string; }&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多一些属性也是不允许的:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(9,5): error TS2322: Type &#39;{ name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>\n<span class="token comment">//   Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可见，<strong>赋值的时候，变量的形状必须和接口的形状保持一致</strong>。</p><h2 id="可选属性" tabindex="-1"><a class="header-anchor" href="#可选属性" aria-hidden="true">#</a> 可选属性</h2><p>有时我们希望不要完全匹配一个形状，那么可以用可选属性:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选属性的含义是该属性可以不存在。</p><p>这时<strong>仍然不允许添加未定义的属性</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// examples/playground/index.ts(9,5): error TS2322: Type &#39;{ name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>\n<span class="token comment">//   Object literal may only specify known properties, and &#39;gender&#39; does not exist in type &#39;Person&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="任意属性" tabindex="-1"><a class="header-anchor" href="#任意属性" aria-hidden="true">#</a> 任意属性</h2><p>有时候我们希望一个接口允许有任意的属性，可以使用如下方式:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>\n  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>[propName: string]</code> 定义了任意属性取 <code>string</code> 类型的值。</p><p>需要注意的是，<strong>一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>\n  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(3,5): error TS2411: Property &#39;age&#39; of type &#39;number&#39; is not assignable to string index type &#39;string&#39;.</span>\n<span class="token comment">// index.ts(7,5): error TS2322: Type &#39;{ [x: string]: string | number; name: string; age: number; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>\n<span class="token comment">//   Index signatures are incompatible.</span>\n<span class="token comment">//     Type &#39;string | number&#39; is not assignable to type &#39;string&#39;.</span>\n<span class="token comment">//       Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，任意属性的值允许是 <code>string</code>，但是可选属性 <code>age</code> 的值却是 <code>number</code>，<code>number</code> 不是 <code>string</code> 的子属性，所以报错了。</p><p>另外，在报错信息中可以看出，此时 <code>{ name: &#39;Tom&#39;, age: 25, gender: &#39;male&#39; }</code> 的类型被推断成了 <code>{ [x: string]: string | number; name: string; age: number; gender: string; }</code>，这是联合类型和接口的结合。</p><h2 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性" aria-hidden="true">#</a> 只读属性</h2><p>有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 <code>readonly</code> 定义只读属性:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  id<span class="token operator">:</span> <span class="token number">89757</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>\n  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\ntom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">9527</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(14,5): error TS2540: Cannot assign to &#39;id&#39; because it is a constant or a read-only property.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，使用 <code>readonly</code> 定义的属性 <code>id</code> 初始化后，又被赋值了，所以报错了。</p><p><strong>注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候</strong>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> tom<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>\n  gender<span class="token operator">:</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\ntom<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">89757</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(8,5): error TS2322: Type &#39;{ name: string; gender: string; }&#39; is not assignable to type &#39;Person&#39;.</span>\n<span class="token comment">//   Property &#39;id&#39; is missing in type &#39;{ name: string; gender: string; }&#39;.</span>\n<span class="token comment">// index.ts(13,5): error TS2540: Cannot assign to &#39;id&#39; because it is a constant or a read-only property.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，报错信息有两处，第一处是在对 <code>tom</code> 进行赋值的时候，没有给 <code>id</code> 赋值。</p><p>第二处是在给 <code>tom.id</code> 赋值的时候，由于它是只读属性，所以报错了。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',29),y={href:"http://www.typescriptlang.org/docs/handbook/interfaces.html",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("Interfaces"),f=(0,e.Uk)("("),T={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html",target:"_blank",rel:"noopener noreferrer"},x=(0,e.Uk)("中文版"),P=(0,e.Uk)(")"),q={},w=(0,a(78732).Z)(q,[["render",function(n,s){const a=(0,e.up)("RouterLink"),q=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e.kq)(" more "),p,o,(0,e._)("p",null,[i,(0,e.Wm)(a,{to:"/code/language/typescript/advanced/class-and-interfaces.html#%E7%B1%BB%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3"},{default:(0,e.w5)((()=>[l])),_:1}),c]),r,(0,e._)("p",null,[u,(0,e._)("a",d,[k,m,v,(0,e.Wm)(q)]),b]),g,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",y,[h,(0,e.Wm)(q)]),f,(0,e._)("a",T,[x,(0,e.Wm)(q)]),P])])],64)}]])},78732:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},45020:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-76bd067c",path:"/code/language/typescript/basics/type-of-object-interfaces.html",title:"对象的类型——接口",lang:"zh-CN",frontmatter:{title:"对象的类型——接口",icon:"api",category:["TypeScript"],summary:"在 TypeScript 中，我们使用接口(Interfaces)来定义对象的类型。\n",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/language/typescript/basics/type-of-object-interfaces.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"对象的类型——接口"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2020-06-03T17:08:34.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:modified_time",content:"2020-06-03T17:08:34.000Z"}]]},excerpt:"<p>在 TypeScript 中，我们使用接口(Interfaces)来定义对象的类型。</p>\n",headers:[{level:2,title:"什么是接口",slug:"什么是接口",children:[]},{level:2,title:"简单的例子",slug:"简单的例子",children:[]},{level:2,title:"可选属性",slug:"可选属性",children:[]},{level:2,title:"任意属性",slug:"任意属性",children:[]},{level:2,title:"只读属性",slug:"只读属性",children:[]},{level:2,title:"参考",slug:"参考",children:[]}],git:{createdTime:1591204114e3,updatedTime:1591204114e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:3.64,words:1093},filePathRelative:"code/language/typescript/basics/type-of-object-interfaces.md"}}}]);